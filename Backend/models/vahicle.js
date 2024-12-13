const mongoose = require('mongoose');

const carsschema = new mongoose.Schema({
    make: String,
    model: String,
    year: String,
    horsePower: { type: Number, default: 700 },
    transmission: String,
    status: { type: String, default: 'available' },
    },{timestamps:true });

    const Vahicle = mongoose.model('Vahicle', carsschema);
    module.exports = Vahicle;