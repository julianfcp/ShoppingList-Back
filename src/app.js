const express = require('express');  // EMC5 javascript - permite crear un server
const cors = require('cors'); // middleware que permite intercambiar datos entre dos servidores (front y back)
const app = express();



// **************************************************************
// ********************** settings ******************************
// **************************************************************
app.set('port', process.env.PORT || 5000);



// **************************************************************
// ********************* middlewares ****************************
// **************************************************************
app.use(cors()); // habilitar cors
app.use(express.json()); // habilitar envio de files formato json



// **************************************************************
// ************************** Routes ****************************
// **************************************************************

app.use('/api/users', (req, res) => res.send('Hello World!'));
app.use('/api/currentList', require('./routes/CurrentList'));
app.use('/api/lists', require('./routes/Lists'));
app.use('/api/listItems', require('./routes/ListsItems'));

module.exports = app;