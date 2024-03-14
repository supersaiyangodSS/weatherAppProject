const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require("path");

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../views")
console.log(views_path);

app.set('view engine', 'hbs');
app.set("views", views_path)
app.use(express.static(static_path));

app.get('/', (req, res) => res.render('index'));
app.get('*', (req, res) => {
    res.render('404', {
    errMessage : "Opps! Page Not Found"
})
})

app.listen(port, () => console.log(`server listening on port ${port}!`));