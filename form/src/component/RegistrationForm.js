import React, { useState } from 'react'
import axios from "axios";
import moment from 'moment';

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [age, setAge] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const diff = moment().diff(dob, 'years')
        const age = diff > 14 ? diff : 'Age must be older than 14 years';

        setFirstName('');
        setLastName('');
        setEmail('');
        setCountry('');
        setState('');
        setCity('');
        setGender('');
        setDob('');
        setAge('');

        //submit the form to backend
        axios.post('http://localhost:8000/register', {
            firstName,
            lastName,
            email,
            country,
            state,
            city,
            gender,
            dob,
            age,
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='form'>RegistrationForm
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} pattern="[A-Za-z]+" required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} pattern="[A-Za-z]+" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />


                <label htmlFor="country">Country:</label>
                <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} required>
                    <option value=""></option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                </select>

                <label htmlFor="state">State:</label>
                <select id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                    <option value=""></option>
                    <option value="NY">New York</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                </select>

                <label htmlFor="city">City:</label>
                <select id="city" value={city} onChange={(e) => setCity(e.target.value)} required>
                    <option value=""></option>
                    <option value="AY">Albany</option>
                    <option value="BK">Brooklyn</option>
                    <option value="MN">Manhattan</option>
                </select>

                <label htmlFor="gender">Gender:</label>
                <div id="gender">
                    <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} required />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="female">Female</label>
                </div>

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} max={moment().subtract(14, 'years').format('YYYY-MM-DD')} required />

                <label htmlFor="age">Age:</label>
                <input type="text" id="age" value={age} disabled />

                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default RegistrationForm

