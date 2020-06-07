const { Schema, model } = require('mongoose');

const ListsItemsSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemStatus: {
        type: String,
        required: true
    },
    listId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        default: 12345
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Almacena la fecha de creacion del schema
});


// Coleccion de datos Note
module.exports = model('ListsItems', ListsItemsSchema);