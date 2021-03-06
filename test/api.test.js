
var chai       = require('chai');
var expect = chai.expect;

var assert     = require('assert');
var path       = require('path');
var HashToCoin = require(path.join(__dirname, '..', 'index'));
var _ = require('underscore');

var stubs = {
  get: function(options, then) {
    var data = {};
    _.extend(options, {page: 'api', api_key: this.api_key});
    data[options.action] = {data: {options: options}};
    then(null, data);
  }
};

describe('HashToCoin', function() {
  describe('getuserbalance', function() {
    it('valid', function(done) {
      var hashToCoins = new HashToCoin({api_key: 'test'});
      hashToCoins.implement(stubs);
      hashToCoins.getuserbalances(function(err, data) {
        expect(data[0].action).to.equal('getuserbalances'); 
        expect(data[0].api_key).to.equal('test'); 
 
        done();
      })
    });
  });

  describe('getnetworksinfo', function() {
    it('valid', function(done) {
      var hashToCoins = new HashToCoin({api_key: 'test'});
      hashToCoins.implement(stubs);
      hashToCoins.getnetworksinfo(function(err, data) {
        expect(data[0].action).to.equal('getnetworksinfo'); 
        expect(data[0].api_key).to.equal('test');
        done();
      })
    });
  });

  describe('getuserhashrate', function() {
    it('valid', function(done) {
      var hashToCoins = new HashToCoin({api_key: 'test'});
      hashToCoins.implement(stubs);
      hashToCoins.getuserhashrate(function(err, data) {
        expect(data.options.action).to.equal('getuserhashrate'); 
        expect(data.options.api_key).to.equal('test');
        done();
      })
    });
  });

  describe('setworkercurrency', function() {
    it('valid', function(done) {
      var hashToCoins = new HashToCoin({api_key: 'test'});
      hashToCoins.implement(stubs);
      hashToCoins.setworkercurrency({worker: 'test.worker', coin: 'TEST'},function(err, data) {
        expect(data.worker).to.equal('test.worker'); 
        expect(data.coin).to.equal('TEST');
        done();
      })
    });
  });


});
