import React from 'react'
import { Link, Router  } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
            <Link to="/" className="navbar-brand">
                Student Todo
            </Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Dashboard
              </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user/create" className="nav-link">
                            Create User
              </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/course/create" className="nav-link">
                            Create User Course
              </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
