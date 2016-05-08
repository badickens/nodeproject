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
     {text: 'YouTube', url: 'https://www.youtube.com'},
     {text: 'Yahoo', url: 'https://www.yahoo.com'},
     {text: 'Vox', url: 'http://www.vox.com'}
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
app.get('/books', function(request, response) {
  var favoriteBooks = [
      {text: 'Quiet:The Power of Introverts in a World That Can\'t Stop Talking ', url: 'http://www.amazon.com/Quiet-Power-Introverts-World-Talking/dp/0307352153/ref=sr_1_1?s=books&ie=UTF8&qid=1462676499&sr=1-1&keywords=quiet+the+power+of+introverts+in+a+world+that+can%27t+stop+talking', author: 'by Susan Cain'},
      {text: 'Capital in the Twenty-First Century ', url: 'http://www.amazon.com/Capital-Twenty-First-Century-Thomas-Piketty/dp/067443000X/ref=sr_1_1?s=books&ie=UTF8&qid=1462676284&sr=1-1&keywords=capital+in+the+twenty-first+century', author: 'by Thomas Piketty'},
      {text: 'Guns, Germs, and Steel ', url: 'http://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393317552/ref=sr_1_1?s=books&ie=UTF8&qid=1462676469&sr=1-1&keywords=guns+germs+and+steel', author: 'by Jared M. Diamond'},
      {text: 'The New Jim Crow ', url: 'http://www.amazon.com/New-Jim-Crow-Incarceration-Colorblindness/dp/1595586431/ref=sr_1_1?s=books&ie=UTF8&qid=1462676351&sr=1-1&keywords=the+new+jim+crow', author: 'by Michelle Alexander'},
      {text: 'Slavery by Another Name ', url: 'http://www.amazon.com/Slavery-Another-Name-Re-Enslavement-Americans/dp/0385722702/ref=sr_1_1?s=books&ie=UTF8&qid=1462676395&sr=1-1&keywords=slavery+by+another+name', author: 'by Douglas A. Blackmon'}
    ];

  response.render('books', {
    title: 'books page',
    links: favoriteBooks
  });
});

//==============
// server
//==============

app.listen(port, function() {
  console.log('Server is running on ' + port);
});
