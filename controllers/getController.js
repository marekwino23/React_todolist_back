
const db = require('../config/database');

 const getController = function getTasks(req, res) {
    db.query(`SELECT id, task_content, date, status from Tasks`, function (err, rows, fields) {
        console.log(rows)
        if (err || !rows.length) {
            console.log("error")
        } else {
            console.log("done")
            res.status(200).send({items: rows})
        }
    })
}

module.exports=getController;
