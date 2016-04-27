var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

//================
// middleware
//================
app.set('views', 'views');

app.engine('hbs', exphbs({
   extname: 'hbs',
   defaultLayout: 'main',
   LayoutsDir: './views/layouts'
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

//==============
// routes
//==============
app.get('/', function(request, response) {
   //response.send('hi there');
   var favoriteColors = ['purple', 'dark grey', 'khaki'];
   var favoriteLinks = [
     {text: 'YouTube', url: 'http://youtube.com'},
     {text: 'Yahoo', url: 'http://yahoo.com'},
     {text: 'Vox', url: 'http://vox.vom'}
   ];

   response.render('home', {
     title: 'home page', // adds in title tab
     favorites: favoriteColors,
     links: favoriteLinks
   });
});

app.get('/projects', function(request, response) {
  response.render('projects');
});
//==============
// server
//==============

app.listen(port, function() {
  console.log('Server is running on ' + port);
});
