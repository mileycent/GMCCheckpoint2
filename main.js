const express = require("express")
const app = express();

app.set('views engine', 'ejs');
// app.set('views', 'partials');
console.log("Hello");
app.use(express.static('public'))


app.listen(3000, () => {
  console.log('app listening on port 3000')
})

app.use('/', (req, res, next) => {
  const date = new Date();
  if (date.getHours() > 17) 
   console.log('its past evening time') 

next()
});

app.get('/', (req, res) => {
  res.render('home.ejs', {title: 'Home'});
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs', {title: 'Contact'});
});

app.get('/service', (req, res) => {
  res.render('service.ejs', {title: 'Services'});
});

app.use((req, res) => {
  res.status(404).render('404',{title: '404'});
});

