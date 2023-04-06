const formModel = require('./formModel')
const moment = require('moment')

const isValidreqbody = function (body) {
    return Object.keys(body).length > 0
}


const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}

const createForm = async (req, res) => {
    try {
        let data = req.body

        // if (!isValidreqbody(data)) {
        //     return res.status(400).send({ status: false, Msg: "please provide user details" })
        // }

        const { firstName, lastName, email, country, state, city, gender, dob } = data;

        // Validate input fields
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const age = moment().diff(dob, 'years');

        // if (!isValid(firstName) || !isValid(lastName)) {
        //     return res.status(400).send({ status: false, msg: "fname or lname required" })
        // }

        // if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        //     return res.status(400).send('Please enter valid name');
        // }

        // if (!email) {
        //     return res.status(400).send({ status: false, msg: "PLEASE PROVIDE EMAIL" })
        // }

        // if (!emailRegex.test(email)) {
        //     return res.status(400).send({ status: false, msg: "PLEASE PROVIDE VALID EMAIL" })
        // }

        // let uniqueEmail = await formModel.findOne({ email: email })
        // if (uniqueEmail) {
        //     return res.status(403).send({ status: false, msg: "email address is already registered" })
        // }

        // if (!isValid(gender)) {
        //     return res.status(400).send({ status: false, msg: "gender is required" })
        // }

        // let validGender = ['male', 'female', 'other']
        // if (!validGender.includes(data.gender)) return res.status(400).send({ status: false, msg: "gender should be one of male, female, and other" });

        // if (age < 14) {
        //     return res.status(400).send('Age must be older than 14 years')
        // }

        const newUser = new formModel({
            firstName,
            lastName,
            email,
            country,
            state,
            city,
            gender,
            dob,
            age
        })

        await newUser.save()
        res.send('registered successfully')

        // return res.status(201).send({ status: true, data: newUser })

    }

    catch (err) {
        return res.status(500).send({ Error: err.message })
    }
}

module.exports = { createForm }