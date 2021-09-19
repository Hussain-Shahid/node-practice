const friends= require('../models/friends.models')



function getfriends(req,res){

    res.render('friends',{
        friends:friends
    })
    // res.status(200).json(friends)

}
function addFriend(req,res){
    if(!req.body.Name)
    {
        return res.status(400).send({
            "error":"Cannot create new Friend"
        })
    }
    const NewFriend={
        id:friends.length,
        Name:req.body.Name
    }
    friends.push(NewFriend)
    res.status(200).send(NewFriend)
}

function getFriend(req,res){
    const index=Number(req.params.id);
    const friend=friends[index]
    if(friend)
    {
        res.status(200).json(friend)
    }
    else
    {
        res.status(404).send('<h1>Page 404 <h1>')
    }
    
}
module.exports={
    getFriend,
    getfriends,
    addFriend
}