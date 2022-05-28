//creat db
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
})

//connect to database
db.connect((err) => {
    if (err) {
        throw err;
    } console.log('mysql conncted');
})

//create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodedb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('Database Created')
    })
})



//create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,tittle VARCHAR(255),body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post Table created')
    })
})


//insert post 1
app.get('/addpost1', (req, res) => {
    let post = { tittle: 'Post 1', body: 'This is post number one' }
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post Table added')
    })

})

app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id =${req.params.id}`
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('Post Fetched')
    })
})
app.listen(3000, () => console.log('Server running on 3000'))