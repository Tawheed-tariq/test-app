const Message = require('../models/messageModel')


module.exports.addMsg = async (req, res, next) => {
    try {
        const {from , to , message} = req.body
        const data = await Message.create({
            message :{text : message},
            users : [from , to],
            sender: from
        })
        if(data) {
            return res.json({msg : "message added successfully"})
        }else{
            return res.json({msg : "falied to add message to database"})
        }
    } catch (error) {
        next(error)
    }
}