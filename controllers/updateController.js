
const db = require('../../config/database');


const updateController = function updateTask (req, res) {
    const task_id = req.body["task_id"]
    const id = req.body["id"]
    const task = req.body["task"]
    const date = req.body["date"]
    const status = req.body["status"]
    db.query(`Update Tasks set task=?, date=?, status = ? where worker_id = ? and id = ?`,[task,date,status,id,task_id], function (err, rows, fields) {
        if (err) {
            console.error("error")
        } else {
            console.log("done")
            res.status(200).send({info: "update success"})
        }
    })
}
module.exports=updateController;

