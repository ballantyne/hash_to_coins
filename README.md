hash_to_coins
------------


This is a very simple api client that helps interact with the [HashToCoins](http://hash-to-coins.com/index.php?page=register&rid=53579) mining pool api.  


Installation
------------
```bash
npm install hash_to_coins --save
```

Usage
------------

```javascript

var options = {
  "api_key": ""
}

var HashToCoins = require('hash_to_coins');
var hashToCoins = new HashToCoins(options);

hashToCoins.getuserbalances(function(err, data) {
  console.log(data);
})

hashToCoins.getnetworksinfo(function(err, data) {
  console.log(data);
})

hashToCoins.setworkercurrency({worker: 'worker.name', coin: 'TIPS'}, function(err, data) {
  console.log(data);
})

hashToCoins.getuserhashrate(function(err, data) {
  console.log(data);
})

```




Contributing
------------

If you'd like to contribute a feature or bugfix: Thanks! To make sure your fix/feature has a high chance of being included, please read the following guidelines:

1. Post a [pull request](https://github.com/ballantyne/hash_to_coins/compare/).
2. Make sure there are tests! We will not accept any patch that is not tested.
   It's a rare time when explicit tests aren't needed. If you have questions
   about writing tests for paperclip, please open a
   [GitHub issue](https://github.com/ballantyne/hash_to_coins/issues/new).


And once there are some contributors, then I would like to thank all of [the contributors](https://github.com/ballantyne/hash_to_coins/graphs/contributors)!


License
-------

It is free software, and may be redistributed under the terms specified in the MIT-LICENSE file.

Copyright
-------
© 2018 Scott Ballantyne. See LICENSE for details.
