const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs")

const static_path = path.join(__dirname, "../public");
// console.log(static_path);

const partial_path = path.join(__dirname, "../templates/partials")
const views_path = path.join(__dirname, "../templates/views")
console.log(partial_path);
console.log(views_path);

app.set('view engine', 'hbs');
app.set("views", views_path)
app.use(express.static(static_path));
hbs.registerPartials(partial_path)

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/weather', (req, res) => res.render('weather'));
app.get('*', (req, res) => {
    res.render('404', {
    errMessage : "Opps! Page Not Found"
})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));