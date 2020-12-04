const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

module.exports = () => {
    const app = express();

    //SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    //MIDDLEWARES
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        res.header("Acess-Control-Allow-Headers", "Content-type");
        res.header("Acess-Control-Allow-Origin", "*");
        res.header("Acess-Control-Allow-Methods", 'GET, POST');
        app.use(cors());
        next();
    });

    //ENDPOINTS
    // consign({cwd: 'api'})
    //     .then('data')
    //     .then('controllers')
    //     .then('routes')
    //     .into('app');
    require('../api/routes/customerWallets')(app);

    return app;
};