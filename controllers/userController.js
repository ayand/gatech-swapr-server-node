var bcrypt = require('bcrypt-nodejs');
var jwt = require("jsonwebtoken");

module.exports.createUser = function(req, res) {
    var user = {};
    user["username"] = req.body.username;
    user["name"] = req.body.name;
    user["email"] = req.body.email;
    bcrypt.genSalt(5, function(err, salt) {
<<<<<<< HEAD
        if (err) return res.status(400).send({ "error": "Could not create user" });
=======
        if (err) return res.send({ "error": "Could not create user" });
>>>>>>> df4f1cb41edbadbff8c579858f346b4dce050272

        bcrypt.hash(req.body.password, salt, null, function(err, hash) {
            if (err) return callback(err);
            user["password"]= hash;
            user["token"] = jwt.sign(user, "app_secret");
            req.app.locals.db.run("INSERT INTO id_map (username, email, full_name, pwd_hash, token, role_id) VALUES (?,?,?,?,?,?)", [req.body.username, req.body.email, req.body.name, user["password"], user["token"], 2], function(error) {
                if (error) {
<<<<<<< HEAD
                    return res.status(400).send({ "error": "Could not create user" });
=======
                    return res.send({ "error": "Could not create user" });
>>>>>>> df4f1cb41edbadbff8c579858f346b4dce050272
                } else {
                    var response = {};
                    response["id"] = this.lastID;
                    response["username"] = req.body.username;
                    response["name"] = req.body.name;
                    response["email"] = req.body.email;
                    response["role_id"] = 2;
<<<<<<< HEAD
                    return res.status(201).send(response);
=======
                    return res.send(response);
>>>>>>> df4f1cb41edbadbff8c579858f346b4dce050272
                }
            })
            //callback();
        });
    });
};
