
const db = require('../config/database');

 const getcurrentTaskController = function getTask(req, res) {
    const id = req.params.id
    console.log(id)
    db.query(`SELECT id, task_content, date, status  from Tasks where id = ${id}`, function (err, row, fields) {
       console.log(row)
        if (err || !row.length) {
            console.log("error")
        } else {
            console.log("done")
            res.status(200).send({id: row[0].id, date: row[0].date, content: row[0].task_content, status: row[0].status})
        }
    })
}

module.exports=getcurrentTaskController;
