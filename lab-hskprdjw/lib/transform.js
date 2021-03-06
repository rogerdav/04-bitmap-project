'use strict';


const transform = module.exports = {};


transform.reverseImage = function(bmp, callback) {
  if (!bmp || typeof bmp === 'string') return null;
  let test = bmp.pixelArray.reverse();
  bmp.pixelArray = test;
  callback(null, bmp);
};

transform.removeBlue = function(bmp, callback) {
  if (!bmp || typeof bmp === 'string') return null;
  if (!bmp.colorArray) return null;
  let colorArray = bmp.colorArray;
  for(let i = 0; i < colorArray.length; i += 4) {
    colorArray[i] = 0;
  }
  bmp.colorArray = Buffer.from(colorArray);
  callback(null, bmp);
};

transform.boostBlue = function(bmp, callback) {
  if (!bmp || typeof bmp === 'string') return null;
  if (!bmp.colorArray) return null;
  let colorArray = bmp.colorArray;
  for(let i = 0; i < colorArray.length; i += 4) {
    colorArray[i] = 200;
  }
  bmp.colorArray = Buffer.from(colorArray);
  callback(null, bmp);
};

transform.randomImage = function(bmp, callback) {
  if (!bmp || typeof bmp === 'string') return null;
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = Math.floor(Math.random() * (32 - 0) + 0);
  }
  callback(null, bmp);
};
