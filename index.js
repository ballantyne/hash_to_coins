const klass       = require('klass');
const request     = require('request');
const _           = require('underscore');
const querystring = require('querystring');

module.exports = klass(function(options) {
  _.extend(this, options);
  if (this.host == undefined) {
    this.host = 'https://hash-to-coins.com';
  }

  if (this.path == undefined) {
    this.path = '/index.php';
  }

  if (this.verbose == undefined) {
    this.verbose = true;
  }

}).methods({

  request: function(options, then) {
    request.get({
      url: [
        this.host, this.path, '?', querystring.stringify(options)
      ].join('')
    }, function(err, r, body) {
      if (body != undefined) {
        body = JSON.parse(body);
      }
      if (self.verbose) {
        console.log(body);
      }

      then(err, body);
    })  
  },

  get: function(options, then) {
    var self = this;
    _.extend(options, {page: 'api', api_key: this.api_key});
    this.request(options, then);
  },

  getuserbalances: function(then) {
    var options = {action: 'getuserbalances'};
    this.get(options, function(err, data) {
      data = _.values(data.getuserbalances.data);
      then(err, data);
    }); 
  },

  getnetworksinfo: function(then) {
    var options = {action: 'getnetworksinfo'};
    this.get(options, function(err, data) {
      data = _.values(data.getnetworksinfo.data);
 
      then(err, data);
    }); 
  },

  setworkercurrency: function(options, then) {
    options.action = 'setworkercurrency';
    this.get(options, function(err, data) {
      if (data.setworkercurrency.data.error == 'True') {
        data = { 
          success: false, 
          error: data.setworkercurrency.data.message, 
          worker: options.worker, 
          coin: options.coin 
        };
      } else {
        err = null;
        data = { 
          success: true, 
          error: false,
          worker: options.worker, 
          coin: options.coin 
        };
      }
      then(err, data);
    }); 
  },

  getuserhashrate: function(then) {
    var options = {action: 'getuserhashrate'};
    this.get(options, function(err, data) {
      then(err, data.getuserhashrate.data)
    });
  }

})
