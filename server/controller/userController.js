const mysql = require('mysql');

//connection pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});

// export views
exports.view = (req,res) => {

    const alertMessage = req.query.alert || '';
    //connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        //Use the connection
        connection.query('SELECT * FROM user WHERE status="active"',(err,rows) => {
            connection.release();

            if(!err){
                res.render('home',{ rows ,alert: alertMessage});
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });

};
 
// Find the user by search
exports.find = (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        let searchTerm = req.body.search;

        //Use the connection
        connection.query('SELECT * FROM user WHERE firstName LIKE ? OR lastName LIKE ? OR email LIKE ? or phone LIKE ?' ,['%' + searchTerm + '%', '%' + searchTerm + '%','%' + searchTerm + '%','%' + searchTerm + '%'], (err,rows) => {
            connection.release();

            if(!err){
                res.render('home',{ rows });
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });

}

exports.form = (req,res) =>{
    res.render('add-user');
}

// add new user 
exports.create = (req,res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let phone = req.body.phone;
        let comments = req.body.comments;

        //Use the connection
        connection.query('INSERT INTO user (firstName,lastName,email,phone,comments) VALUES (?,?,?,?,?)' ,[firstName, lastName,email,phone,comments], (err,rows) => {
            connection.release();

            if(!err){
                res.render('add-user',{alert:'User added successfully.'});
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });
}

// edit the user 
exports.edit = (req,res) =>{

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        //Use the connection
        connection.query('SELECT * FROM user WHERE ID=?',[req.params.id],(err,rows) => {
            connection.release();

            if(!err){
                res.render('edit-user',{ rows });
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });
}

// update the user 
exports.update = (req,res) =>{

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let comments = req.body.comments;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        //Use the connection
        connection.query('UPDATE user SET firstName = ?,lastName = ?,email = ?,phone = ?,comments = ? WHERE ID = ?',[firstName,lastName,email,phone,comments,req.params.id],(err,rows) => {
            connection.release();

            if(!err){
                pool.getConnection((err, connection) => {
                    if (err) {
                        console.error('Error connecting to database:', err.stack);
                        return;
                    }
                    console.log('Connected as ID ' + connection.threadId);
            
                    //Use the connection
                    connection.query('SELECT * FROM user WHERE ID=?',[req.params.id],(err,rows) => {
                        connection.release();
            
                        if(!err){
                            res.render('edit-user',{ rows , alert: `${firstName} has been updated successfully.`});
                        }
                        else{
                            console.log(err);
                        }
                    });
                });
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });
}

// Delete the user 
exports.delete = (req,res) =>{

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        //Use the connection
        connection.query('UPDATE user SET status = ? WHERE ID = ?',['removed',req.params.id],(err,rows) => {
            connection.release();

            if(!err){
                res.redirect(`/?alert=${req.params.id}+has+been+deleted.`);
            }
            else{
                console.log(err);
            }

            console.log('The data deleted from table:\n', rows);
        });
    });
}


// view users 
exports.viewuser = (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
        }
        console.log('Connected as ID ' + connection.threadId);

        //Use the connection
        connection.query('SELECT * FROM user WHERE ID = ?',[req.params.id],(err,rows) => {
            connection.release();

            if(!err){
                res.render('view-user',{ rows });
            }
            else{
                console.log(err);
            }

            console.log('The data from user table:\n', rows);
        });
    });
}

