
const db = require('../config/database');

 const addController = function addTask(req, res) {
    const task = req.body.text
    const date = req.body.date
    const time = req.body.clock
    db.query(`INSERT INTO Tasks(task_content, date, time) VALUES(?, ?, ?)`,[task,date,time], function (err, rows, fields) {
        if (err) {
            console.error("error")
        } else {
            console.log("done")
            res.status(200).send({message: "success"})
        }
    })
}
module.exports=addController