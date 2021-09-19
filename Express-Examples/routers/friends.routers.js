const {getFriend,getfriends,addFriend} =require('../controllers/friends.controllers')
const express=require('express')
const friendsRouter=express.Router()
friendsRouter.use((req,res,next)=>{
    console.log(`ip ${req.ip}`)
    next()
})

friendsRouter.post('/',addFriend)
friendsRouter.get('/',getfriends)
friendsRouter.get('/:id',getFriend)


module.exports=friendsRouter