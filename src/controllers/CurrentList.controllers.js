const CurrentlistCtrl = {};

const CurrentListItem = require('../models/CurrentList');

CurrentlistCtrl.getCurrentListItems = async (req, res) => {
    const CurrentListItems = await  CurrentListItem.find(); // la funcion es asincrona por lo que se debe usar async
    res.json(CurrentListItems);
}

CurrentlistCtrl.getCurrentListItem = async (req, res) => {
    const CurrentListItem = await CurrentListItem.findById(req.params.id);
    res.json(CurrentListItem); // devuelve la nota con el id dado
}

CurrentlistCtrl.createCurrentListItem = async (req, res) => {
    const {itemName, itemStatus, date } = req.body; // destructuring de los datos que vienen
    const newCurrentListItem = new CurrentListItem({
        itemName: itemName,
        itemStatus: itemStatus,
    });
    await newCurrentListItem.save(); // se guarda la nota
    console.log(newCurrentListItem);
    res.json({success: true, message: 'CurrentListItem Created'});
}
CurrentlistCtrl.updateCurrentListItem = async (req, res) => {
    const {title, content, author} = req.body;
    // para usar findOneAndUpdate debo cambiar la configuracion en
    // archivo database.js --> useFindAndModify: false
    await CurrentListItem.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author
    });
    console.log(content);
    res.json({Message: 'CurrentListItem: '+req.params.id+' Updated'});
}

CurrentlistCtrl.deleteCurrentListItem = async (req, res) => {
    await CurrentListItem.findByIdAndDelete(req.params.id);
    res.json({Message: 'CurrentListItem: '+req.params.id+' deleted'});
}



module.exports = CurrentlistCtrl;