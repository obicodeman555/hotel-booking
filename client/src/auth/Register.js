import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import RegisterForm from '../components/form/RegisterForm';
import axios from 'axios';

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/register`, {
                fullName,
                email,
                password
            });

            console.log("Register user ====>", response);
            toast.success("Registration successful. You will be directed to the login!");
            navigate("/login")
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(error.response.data)
            }
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