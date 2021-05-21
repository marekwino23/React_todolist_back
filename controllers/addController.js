
const db = require('../config/database');

 const addController = function addTask(req, res) {
    const task = req.body.text
    const date = req.body.date
    db.query(`INSERT INTO Tasks(task_content, date) VALUES(?, ?)`,[task,date], function (err, rows, fields) {
        if (err) {
            console.error("error")
        } else {
            console.log("done")
            res.status(200).send({message: "success"})
        }
    })
}
module.exports=addController