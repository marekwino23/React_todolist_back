
const db = require('../config/database');

const deleteController =  function deleteTask (req, res) {
    const id = req.body.id
    db.query(`DELETE from Tasks where id=?`,[id], function (err, rows, fields) {
        if (err) {
            console.log("error")
        } else {
            console.log("success")
            res.status(200).send({message: "success"})
        }
    })
}
module.exports=deleteController