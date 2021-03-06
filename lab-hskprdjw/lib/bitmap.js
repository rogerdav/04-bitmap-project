'use strict';


// this function just takes the buffer and builds an object for us.
module.exports = function(buffer) {
  if (!buffer) return null;
  this.allData = buffer;
  this.sig = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readUInt32LE(2);
  this.offset = buffer.readUInt32LE(10); // start of pixel array
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.pixelArray = buffer.slice(this.offset);
  this.colorArray = buffer.slice(54, 1024);
};
