const ListsItemsCtrl = {};

const ListItem = require('../models/ListsItems');

// get all items from the list
ListsItemsCtrl.getListsItems = async (req, res) => {
    const Lists = await  ListItem.find(); 
    res.json(Lists);
}
// get items by user and list 
ListsItemsCtrl.getListsItemsByUserId = async (req, res) => {
    const { listId } = req.query;
    const ListsItems = await ListItem.find({
        userId: '12345',
        listId
    });
    res.json({success: true, message: '', items: ListsItems});
}
// creates a lists item
ListsItemsCtrl.createListItem = async (req, res) => {
    const {itemName, itemStatus, listId } = req.body; 
    const newListItem = new ListItem({
        itemName,
        itemStatus,
        listId
    });
    await newListItem.save(); 
    res.json({success: true, message: 'List item Created', listItemInfo: newListItem});
}

ListsItemsCtrl.updateListItem = async (req, res) => {
    const {itemName, itemStatus} = req.body;
    const resp = await ListItem.findOneAndUpdate({_id: req.params.id}, {
        itemName,
        itemStatus
    });
    res.json({Message: 'List Item: '+req.params.id+' Updated'});
}

ListsItemsCtrl.deleteListItem = async (req, res) => {
    await ListItem.findByIdAndDelete(req.params.id);
    res.json({Message: 'List: '+req.params.id+' deleted'});
}



module.exports = ListsItemsCtrl;