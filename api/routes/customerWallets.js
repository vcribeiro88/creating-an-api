module.exports = app => {
    const controller = require('../controllers/customerWallets')();

    app.route('/api/v1/customers-wallets')
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomersWallets);
}