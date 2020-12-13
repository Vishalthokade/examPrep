const express = require('express')

const bodyParser = require('body-parser')
const db = require('./db')
var cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.post('/contact/add', (request, response) => {
    const { name, number } = request.body
    const statement = `insert into contact (name,number) values ('${name}' , '${number}')`
    db.query(statement, (error, result) => {
        if (error) {
            response.send({ status: "error" })
        } else {
            response.send(
                {
                    status: "success",
                    data: result
                }
            )
        }
    })
})
app.get('/contact/getAllContacts', (request, response) => {
    const statement = `select * from contact`
    db.query(statement, (error, result) => {
        if (error) {
            response.send({ status: "error" })
        } else {
            response.send(
                {
                    status: "success",
                    data: result
                }
            )
        }
    })
})


app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000')
})