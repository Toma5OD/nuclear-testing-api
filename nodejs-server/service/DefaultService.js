'use strict';


/**
 *
 * title String 
 * returns tests
 **/
exports.testGET = function(title) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lng" : 0,
  "title" : "White Sands Missile Range, New Mexico",
  "userid" : "e977583f-0f72-44bb-bd08-a7b2231f4a46",
  "lat" : 6
}, {
  "lng" : 0,
  "title" : "White Sands Missile Range, New Mexico",
  "userid" : "e977583f-0f72-44bb-bd08-a7b2231f4a46",
  "lat" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new test
 *
 * body Test  (optional)
 * no response value expected for this operation
 **/
exports.testPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * returns tests
 **/
exports.testidGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lng" : 0,
  "title" : "White Sands Missile Range, New Mexico",
  "userid" : "e977583f-0f72-44bb-bd08-a7b2231f4a46",
  "lat" : 6
}, {
  "lng" : 0,
  "title" : "White Sands Missile Range, New Mexico",
  "userid" : "e977583f-0f72-44bb-bd08-a7b2231f4a46",
  "lat" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

