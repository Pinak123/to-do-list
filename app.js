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
  year: "numeric",
  month: "long",

}
var days = dates.toLocaleDateString("en-US", options);
let todaysList = [];
let getHtml = (list) => {
  var ht = ""
  for (var i = 0; i < list.length; i++) {
    ht += `<li>${list[i]}</li>`
  }
  return ht;
};

app.get('/', function (req, res) {
  res.render('list', {
    day: days,
    l1: todaysList
  });
})

// public/Todolist v1 Starting Styles/Todolist v1 Starting Styles/styles.css
app.post('/', (req, res) => {
  var data = req.body.InputItem;
  if (data !== '') {
     console.log(data);
     todaysList.push(data);
     res.redirect('/');
  }else{
    res.redirect('/');
  }
  // console.log(data);
  // todaysList.push(data);
  // // data1 = getHtml(todaysList);
  // // console.log(data1)
  // res.redirect('/');
})
   





app.listen(3000, function (req, res) {
  console.log("listening on port 3000");

});