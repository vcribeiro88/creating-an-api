const app = require('./config/express')();
const port = app.get('port');

//RODANDO A APLICAÇÃO NA PORTA SETADA
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando`)
});