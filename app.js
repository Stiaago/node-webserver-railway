require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
/*
//hbs para renderisar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');



// contenido estatico


//renderisar hbs con home.hbs
app.get('/', (req,res) => {
  res.render('home', {
      nombre : 'Santiago omaña ',
      titulo : 'Curso de node'
  });
})
*/
app.use( express.static('public'));
  app.get('/generic', ( req , res) => {
    res.send(__dirname + '/public//template/generic.html')
  } )

  app.get('/elements', ( req , res) => {
    res.send(__dirname + '/public/template/elements.html')
  } ) 

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/template/index.html');
  })

app.listen(port, () => {
    console.log(`Se esta escuchando por el puerto http://localhost:${port}` )
}) 