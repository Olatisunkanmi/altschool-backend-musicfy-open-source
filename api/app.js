const express = require('express')
const app = express()

// built-in path module 
const path = require('path')

// port to be used
const port = 5000

// setup public to serve staticfiles
app.use(express.static('../public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})
app.listen(port, (req,res) =>{
    console.log(`Server is listening on port ${port}`)
})
