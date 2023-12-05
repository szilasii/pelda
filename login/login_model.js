const mysql = require("mysql2")
const config = require("../App/config")
const jwt = require("jsonwebtoken")

function signin(req,res) {
try {

    const {email, password} = req.body;
    if (!(email && password)) {
        res.status(400).send("Nem megfelelően megadott adatok");
    }
    var con = mysql.createConnection(config.database);
    con.connect(function(err) {
        if (err) throw err;
        console.log('sikeres csatlakozás');
    })
    sql  = "call userLogin(?,?)";
    con.query(sql,[email,password],(err,result) => {
        console.log(result);
        if (err) throw err;
        let payload = {
            userID : result[0][0].userID,
            email : result[0][0].email
        }
        if(result[0].length > 0) {
            const token = jwt.sign(
            payload,process.env.JWT_STRING,{ expiresIn:"2h" }
            )
        let user = result[0][0]
        con.query("call userUpdateToken(?,?)",[user.userID,token],(err,result,fields) => {
            if(err) throw err;
            user.token = token;
            res.send(user);
        })
        
        }
        else res.status(401).send("Nem engedélyezett!");

    })





} catch(error) {

}
}

exports.signin = signin
