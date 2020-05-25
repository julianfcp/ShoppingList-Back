require('dotenv').config();


const app = require('./app'); // importa el servidor creado en app.js
require('./database');



async function main() {
    await app.listen(app.get('port'));
    console.log('Server up and Running on port', app.get('port'));
}

main();
