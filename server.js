
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public') );

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs'); // Template engine



app.get('/', (req, res)=>{
    //res.send('Hello Word!!');
    
    res.render('index', {
        nombre: 'Jeffri',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res)=>{
    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.get('/data', (req, res)=>{
    res.send('Hola mundo')
})

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
});