const uuidv4 = require('uuid/v4');

module.exports = () => {
    const customerWalletsDB = require('../data/customerWallets.json');
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = customerWalletsDB

    controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

    controller.saveCustomersWallets = (req, res) => {
        customerWalletsMock.data.push({
            id: uuidv4(),
            name: req.body.name,
            occupation: req.body.occupation,
            state: req.body.state,
        });

        res.status(200).json(customerWalletsDB);
    }

    return controller;
}