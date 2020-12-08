const uuidv4 = require('uuid/v4');

module.exports = () => {
    const customerWalletsDB = require('../data/customerWallets.json');
    const controller = {};

    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

    controller.saveCustomersWallets = (req, res) => {
        customerWalletsDB.data.push({
            id: uuidv4(),
            name: req.body.name,
            occupation: req.body.occupation,
            team: req.body.team,
        });

        res.status(200).json(customerWalletsDB);
    }

    return controller;
}