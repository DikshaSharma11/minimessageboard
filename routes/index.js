var express = require('express');
var router = express.Router();

const messages=[
  {
    text:"hi dear",
    user:"Diksha",
    added:new Date()
  },
  {
    text:"hi",
    user:"shubhangi",
    added:new Date()
  },
  {
    text:"Hiii",
    user:"kunal",
    added:new Date()
    
  },
  {
    text:"heloo",
    user:"shravan",
    added:new Date()
  }
]

router.get('/', function(req, res, next) {
  res.render('index', { title: "Minimessageboard", messages: messages });
});
router.get('/new',function(req,res){
  res.render('form',{ title: "NewMessage"})
})
router.post('/new',function(req,res){
 let user=req.body.user
 let message=req.body.message
 messages.push({text:message,user:user,added:new Date()})
 res.redirect('/')
})


module.exports = router;
