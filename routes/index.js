var express = require('express');
var router = express.Router();
const fs=require("fs");
const fileName="message.json";

// const messages=[
  // {
  //   text:"hi dear",
  //   user:"Diksha",
  //   added:new Date()
  // },
  // {
  //   text:"hi",
  //   user:"shubhangi",
  //   added:new Date()
  // },
  // {
  //   text:"Hiii",
  //   user:"kunal",
  //   added:new Date()
    
  // },
  // {
  //   text:"heloo",
  //   user:"shravan",
  //   added:new Date()
  // }
// ]

router.get('/', function (req, res, next) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      data = JSON.parse(data);
      res.render('index', { messages: data });
    }
  })
});

router.post('/', function (req, res) {
  const data = req.body;
  let newMessage = {};
  console.log(data);

  if (data.message === "" || data.userName === "") {
    res.redirect("/new");
  } else {
    newMessage.text = data.message;
    newMessage.user = data.userName;
    newMessage.added = new Date();

    fs.readFile(fileName, (err, data) => {
      if (err) {
        throw err;
      } else {
        data = JSON.parse(data);
        data.push(newMessage);
        data = JSON.stringify(data);
        fs.writeFile(fileName, data, function (err) {
          if (err) throw err;
        })
        res.redirect("/")
      }
    })
  }
})

module.exports = router;