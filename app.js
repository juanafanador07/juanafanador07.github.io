require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

/*Conexión a MongoDB*/
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.rbg6u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
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
    "origin": "https://juanafanador07.github.io",
    "methods": "POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));
   
/*Redirect http to https*/
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect('https://' + req.headers.host + req.url);
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
    res.redirect(301, "https://juanafanador07.github.io" + req.url);
})

/*Configuración de Puerto*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor andando en el puerto ${port}`);
});