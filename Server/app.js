const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")



const corsOption ={
    origin: "http://localhost:5173/"
}

const app = express()
app.use(express.json())
app.use(cors(corsOption))

mongoose.connect(process.env.URL).then(()=>{
    const PORT = process.env.PORT || 8000
})


app.get('/getUsers', (req, res) => {
    EmployeeModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    EmployeeModel.findOne({ email: email })

        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json('Wrong Password')
                }
            } else {
                res.json('User not found')
            }
        })
})

app.post('/register', async (req, res) => {
    try {
        // Check if the email already exists
        const existingEmployee = await EmployeeModel.findOne({ email: req.body.email });

        if (existingEmployee) {
            // Email already exists, show an alert
            return res.status(400).json({ message: 'The email is already in use.' });
        }

        // If the email doesn't exist, create a new employee
        const newEmployee = await EmployeeModel.create(req.body);
        res.json(newEmployee);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server is Running ${PORT}`)
})
