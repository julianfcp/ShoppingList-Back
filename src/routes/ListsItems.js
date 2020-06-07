const { Router } = require('express');
const router = Router();

//******************* Enrutamiento REST **********************
// *** Funciones *** 
const { getListsItems,
        getListsItemsByUserId,
        createListItem, 
        updateListItem, 
        deleteListItem } = require('../controllers/ListItems.controllers');
 
router.route('/') // metodo general para todos los usuarios
    .get(getListsItemsByUserId)
    .post(createListItem)

router.route('/:id') // metodo para un usuario especifico (id)
    //.get(getList)
    .put(updateListItem)
    .delete(deleteListItem)

module.exports = router;