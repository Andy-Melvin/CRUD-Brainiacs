const ejs = require('ejs');
const express=require("express")
const app=express();
app.set('view engine','ejs')



app.get('/', (req, res) => {
res.render('index',{title:'Hello my friends',message:'Hello my dearest Friends'})
});


app.listen(3020,()=>{
    console.log("You are running on server Succesfully");
});

