const { Schema, model } = require('mongoose');

const parkingSchema = Schema({

  plateNumber: {
    type: String,
    unique: true,
    index: true,
  },
  parkingSpaceId: {
    type: Number,
    unique: true,
    index: true,
  },

}, {
  timestamps: true,
});

module.exports = model('Parkings', parkingSchema);
