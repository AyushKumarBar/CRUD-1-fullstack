import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Full Stack Application</Link>

                    <Link className='btn btn-outline-light' to="/adduser">Add User</Link>
                </div>
            </nav>
        </div>
    )
}
