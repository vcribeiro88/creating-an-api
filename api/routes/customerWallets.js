module.exports = app => {
    const controller = require('../controllers/customerWallets')();

    app.route('/')
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomersWallets);
}