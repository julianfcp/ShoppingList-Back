const { Schema, model } = require('mongoose');

const CurrentListSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemStatus: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Almacena la fecha de creacion del schema
});


// Coleccion de datos Note
module.exports = model('CurrentList', CurrentListSchema);