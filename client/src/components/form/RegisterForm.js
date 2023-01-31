import React from 'react';

const RegisterForm = ({ handleSubmit, fullName, setFullName, email, setEmail, password, setPassword }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Enter your full name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='Enter your desired password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default RegisterForm