//Creating GET Router to fetch all the product details from the MySQL Database
app.get('/products' , (req, res) => {
    mysqlConnection.query('SELECT * FROM products', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );