const express=require('express');
const friendsRouter = require('./routers/friends.routers');
const path= require('path')

require('dotenv').config()
const app=express();
const PORT=process.env.PORT
const HOST=process.env.HOST

app.use('/site',express.static(path.join(__dirname,'public')))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    res.render('index.hbs',{
        title:"My friend website",
        message:"Hi this is my friends website"
    })
})

app.use((req,res,next)=>{
    const start=Date.now()
    next()
    console.log(`${req.method}${req.baseUrl}${req.url} ${Date.now()-start}ms`)
})
app.use(express.json())
app.use('/friends',friendsRouter)
app.listen(PORT,HOST,()=>{
    
    console.log(`running at ${HOST}:${PORT}`)
})