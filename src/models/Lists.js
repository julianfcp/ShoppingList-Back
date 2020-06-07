const { Schema, model } = require('mongoose');

const ListsSchema = new Schema({
    listName: {
        type: String,
        required: true
    },
    listStatus: {
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
module.exports = model('Lists', ListsSchema);