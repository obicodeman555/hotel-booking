import React from 'react';
import { useState } from 'react';
import RegisterForm from '../components/form/RegisterForm';
import axios from 'axios';

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/register`, {
                fullName,
                email,
                password
            });

            console.log("Register user ====>", response)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <h1>Register Page</h1>
            <div>
                <div className='panel panel-row'>
                    <div>
                        <RegisterForm handleSubmit={handleSubmit} fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register