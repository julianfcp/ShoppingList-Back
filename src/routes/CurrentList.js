const { Router } = require('express');
const router = Router();

//******************* Enrutamiento REST **********************
// *** Funciones *** 
const { getCurrentListItems, 
        createCurrentListItem, 
        updateCurrentListItem, 
        deleteCurrentListItem, 
        getCurrentListItem } = require('../controllers/CurrentList.controllers');
 
router.route('/') // metodo general para todos los usuarios
    //.get((req, res) => res.send('CurrentListItems Route ........ ')) send imprime en html
    .get(getCurrentListItems)
    .post(createCurrentListItem)

router.route('/:id') // metodo para un usuario especifico (id)
    .get(getCurrentListItem)
    .put(updateCurrentListItem)
    .delete(deleteCurrentListItem)

module.exports = router;