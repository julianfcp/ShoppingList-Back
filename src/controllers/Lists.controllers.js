const ListsCtrl = {};

const List = require('../models/Lists');

ListsCtrl.getLists = async (req, res) => {
    const Lists = await  List.find(); 
    res.json(Lists);
}

ListsCtrl.getList = async (req, res) => {
    const Lista = await List.findById(req.params.id);
    res.json(Lista); 
}

ListsCtrl.createList = async (req, res) => {
    const {listName, listStatus } = req.body; // destructuring de los datos que vienen
    const newList = new List({
        listName: listName,
        listStatus: listStatus,
    });
    await newList.save(); // se guarda la nota
    console.log(newList);
    res.json({success: true, message: 'newList Created', listInfo: newList});
}

ListsCtrl.updateLists = async (req, res) => {
    const {listName, listStatus} = req.body;
    // para usar findOneAndUpdate debo cambiar la configuracion en
    // archivo database.js --> useFindAndModify: false
    await List.findOneAndUpdate({_id: req.params.id}, {
        listName,
        listStatus
    });
    res.json({Message: 'List: '+req.params.id+' Updated'});
}

ListsCtrl.deleteList = async (req, res) => {
    await List.findByIdAndDelete(req.params.id);
    res.json({Message: 'List: '+req.params.id+' deleted'});
}



module.exports = ListsCtrl;