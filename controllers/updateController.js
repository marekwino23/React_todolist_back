
const db = require('../config/database');


const updateController = function updateTask (req, res) {
    const id = req.body.id
    const content = req.body.content
    const time = req.body.time
    const status = req.body.status
    const date = req.body.date
    console.log(id,content,date, time,status)
    db.query(`Update Tasks set task_content=?, date=?, time=?, status = ? where id = ?`,[content,date,time,status,id], function (err, rows, fields) {
        if (err) {
            console.error("error")
        } else {
            console.log("update success")
            res.status(200).send({info: "update success"})
        }
    })
}
module.exports=updateController;

