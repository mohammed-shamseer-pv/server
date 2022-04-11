const exprss=require('express')
const path=require('path')
const bodyParser = require('body-parser'); // Middleware 
const app=exprss()





app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.send('hello')
})


app.use(function(req,res,next){
    console.log('hello')
   next()
})
app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname,'ss.html'))
  console.log('working')
})

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let fustname = req.body.fname;
    let lastname = req.body.lname;
    res.send(`Fustname: ${fustname}  lastname: ${lastname}`);
  });
app.use(function(res,req,next){
    console.log('end')
    next()
})
app.get('/about',(req,res)=>res.send('hello abut'))

app.get('/api',function(req,res){
    res.sendFile(path.join(__dirname,'data.json'))
})





app.listen(3000,function(){
    
    console.log('server started')
})