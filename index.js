import express from 'express';
import router from "./routes/index.js";
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"});

const app = express();

db.authenticate()
    .then(() => console.log('Base de datos conetada'))
    .catch( error => console.log(error) );

const host = process.env.HOST || 4000; 
const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombrePagina = 'Agencia de Viajes';

    next();

});

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', router);

app.listen(port, host, () =>{
    console.log(`Servidor funcionando en puerto ${port}`);
})