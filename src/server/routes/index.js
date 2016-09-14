var express = require('express');
var router = express.Router();
var realtime = require('rtd-realtime');


router.get('/', function(req, res, next) {
  realtime.VehiclePositions.load( (err,feed) => {
    // 'err' will be supplied if an error occured in the request or decoding of the feed,
    // otherwise 'err' will be null
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
    console.log(feed);
});

  res.render('index', { title: 'Express' });
});

module.exports = router;
