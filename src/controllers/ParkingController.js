const Parking = require('../models/Parking');
const { PARKINGS } = require('../../config/const');
const BadRequestError = require('../handlers/error/BadRequestError');

class ParkingController {
  async park(req, res) {
    const { plateNo } = req.body;
    const parkings = await Parking.find({ }).sort({
      parkingSpaceId: -1,
    }).lean();

    if (parkings.length >= PARKINGS) {
      throw new BadRequestError('parking full');
    }

    const allParkings = [...Array(parseInt(PARKINGS, 10)).keys()].map((i) => i + 1);

    const unusedParkings = allParkings
      .filter((x) => !parkings.map((parking) => parking.parkingSpaceId).includes(x));

    const ParkingData = new Parking({
      plateNumber: plateNo,
      parkingSpaceId: (parkings.length && unusedParkings[0]) || 1,
    });

    await ParkingData.save();

    return res.send({ message: 'Car parked', data: ParkingData });
  }

  async unpark(req, res) {
    const { parkingSpaceId } = req.body;
    await Parking.remove({ parkingSpaceId });
    return res.send({ message: 'Car unparked' });
  }

  async getPark(req, res) {
    const { parkingSpaceId, plateNo } = req.body;
    const query = { };

    if (parkingSpaceId !== undefined) query.parkingSpaceId = parkingSpaceId;
    if (plateNo !== undefined) query.plateNumber = plateNo;

    const parkings = await Parking.findOne(query).lean();
    return res.send(parkings);
  }
}

module.exports = ParkingController;
