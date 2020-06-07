const { Router } = require('express');
const router = Router();

//******************* Enrutamiento REST **********************
// *** Funciones *** 
const { getLists, 
        getList,
        createList, 
        updateLists, 
        deleteList } = require('../controllers/Lists.controllers');
 
router.route('/') // metodo general para todos los usuarios
    //.get((req, res) => res.send('CurrentListItems Route ........ ')) send imprime en html
    .get(getLists)
    .post(createList)

router.route('/:id') // metodo para un usuario especifico (id)
    .get(getList)
    .put(updateLists)
    .delete(deleteList)

module.exports = router;