const Place=require('../models/PostModel')


exports.PlacePost = async (req, res) => {
  try {
    const { name, description, position } = req.body;
    const place = new Place({
      name,
      description,
      position: {
        type: 'Point',
        coordinates: position,
      },
    });
    await place.save();
    res.status(201).json({ message: 'Place created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};



exports.PlaceGet = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};



