import React from 'react'

function AddUserForm(props) {
    const { handleChange, handleSubmit, fullname, username, password } = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create New User</h1>
            <input type="text" name="fullName" value={fullName} placeholder= "Full name" onChange={handleChange} />
            <input type="text" name="username" value={username} placeholder= "Username" onChange={handleChange} />
            <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
            <button> Create User Account </button>
        </form>
    )
}