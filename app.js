require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.disable('x-powered-by');

/*Conexión a MongoDB*/
mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conectado a MongoDB')
    })
    .catch(error => {
        console.log('Error al conectar con la base de  datos:', error)
    })

/*CORS*/
app.use(cors({
    "origin": "https://" + process.env.PORTFOLIO,
    "methods": "POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}));

/*Redirect http to https*/
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(301, 'https://' + req.headers.host + req.url);
        } else {
            return next();
        }
    } else {
        return next();
    }
});

/*Router*/
app.use('/', require(__dirname + '/router'));

/*Redirections*/
app.use((req, res) => {
    return res.redirect(301, "https://" + process.env.PORTFOLIO + req.url);
})

/*Configuración de Puerto*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor andando en el puerto ${port}`);
});