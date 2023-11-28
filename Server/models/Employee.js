const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    namef: { type: String, required: true },
    namel: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: { type: String, minLength: 6, maxLength: 128 },
})

const EmployeeModel = mongoose.model("eemployees", EmployeeSchema)
module.exports = EmployeeModel