import React from 'react'

const SignInForm = props => {
    const { handleChange, handleSubmit, username, password } = props
    return (
        
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input type="text" name="username" value={username} placeholder= "Username" onChange={handleChange} />
                <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
                <button>Sign In</button>
            </form>
    )
}

export default SignInForm
