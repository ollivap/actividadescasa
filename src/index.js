console.log('Server funciona');

var express = require('express');
var body_parser = require('body-parser');

const app = express();
const path = require('path');

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'vistas'));
app.set('view engine','ejs');

//
app.use(body_parser.urlencoded({extended:true}));

//routes
app.use(require('./rutas'));
  //(path.join(__dirname,'vistas/index.html'));
  //console.log(path.join(__dirname,'views/index.html'));

// static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'),()=>{console.log('Server en puerto',3000);
});
