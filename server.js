const app = require('./config/express')();
const port = app.get('port');

//RODANDO A APLICAÇÃO NA PORTA SETADA
app.listen(process.env.APP_URL, () => {
    console.log(`Servidor rodando`)
});