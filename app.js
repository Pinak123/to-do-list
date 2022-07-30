const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require(path.join(__dirname, 'rout/index.js')));

app.set('view engine', 'ejs');


var dates = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long",

}
var days = dates.toLocaleDateString("en-US", options);
let todaysList = [];
let workItems = [];



app.get('/', function (req, res) {
  res.render('list', {
    title: days,
    l1: todaysList
  });
})
app.get('/work', (req, res) => {
  res.render('list', {
    title: "Work",
    l1: workItems
  });
})


// public/Todolist v1 Starting Styles/Todolist v1 Starting Styles/styles.css
app.post('/', (req, res) => {
  var data = req.body.InputItem;
  if (req.body.button == "Work"){
    if (data !== '') {
      workItems.push(data);
      res.redirect('/work');
    } else {
      res.redirect('/work');
    }
  }else{
    if (data !== '') {
      // console.log(req.body);
      todaysList.push(data);
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  }

})
app.post('/work', (req, res) => {
  let items = req.body.InputItem;
  if (items !== '') {
    workItems.push(items);
    res.redirect('/work');
  } else {
    res.redirect('/work');
  }
})





app.listen(3000, function (req, res) {
  console.log("listening on port 3000");

});