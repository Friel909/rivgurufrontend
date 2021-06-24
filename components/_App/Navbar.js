import React from 'react'
import Link from '@/utils/ActiveLink'
import { handleLogout } from '@/utils/auth'
import SearchForm from './SearchForm'

const Navbar = ({ user }) => {
    // console.log(user)
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })

    const isAdmin = user && user.role === 'admin'
    const isTeacher = user && user.role === 'teacher'
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="edemy-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">
              
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/logo2.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <SearchForm />

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                About<i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <li className="nav-item">
                                                    <Link href="/about-2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                                    </Link>
                                                </li> 
                                            </li>
                                            
                                            <li className="nav-item">
                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                    </Link>
                                                </li> 
                                            </li>
                                            
                                            <li className="nav-item">
                                                <li className="nav-item">
                                                    <Link href="/contact" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                                    </Link>
                                                </li> 
                                            </li>
                                        </ul>
                                    </li>
 
                                    <li className="nav-item megamenu">
                                        <Link href="/courses-5" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Courses</a>
                                        </Link>
                                    </li>
 
                                    <li className="nav-item megamenu">
                                        <Link href="/courses-3" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Webinars</a>
                                        </Link>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="/blog-4" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                        </Link>
                                    </li>
                                
                                    <li className="nav-item">
                                        <Link href="/regist">
                                            <a className="nav-link">
                                                Try For Free
                                            </a>
                                        </Link>
                                    </li>

                                    {(user && isTeacher || user && isAdmin) && (
                                        <li className="nav-item">
                                            <Link href="/teacher/dashboard">
                                                <a className="nav-link">
                                                    Teacher Dashboard
                                                </a>
                                            </Link>
                                        </li>
                                    )}
                                    {user && isAdmin && (
                                        <li className="nav-item">
                                            <Link href="/admin/dashboard">
                                                <a className="nav-link">
                                                    Dashboard
                                                </a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>

                                <div className="others-option d-flex align-items-center">

                                    <div className="option-item">
                                        {user ? (
                                            <div className="user-dropdown">
                                                <Link href="/">
                                                    <a onClick={e => e.preventDefault()} className="default-btn">
                                                        <i className="flaticon-user"></i> {user.name} <span></span>
                                                    </a>
                                                </Link>
 
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/my-courses" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">My Courses</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/user/my-profile" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">My Profile</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/user/edit-profile" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Edit Profile</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/user/edit-password" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Edit Password</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/">
                                                            <a 
                                                                className="nav-link"
                                                                onClick={e => {
                                                                    e.preventDefault();
                                                                    handleLogout()
                                                                }}
                                                            >
                                                                Logout
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : (
                                            <Link href="/authentication">
                                                <a className="default-btn">
                                                    <i className="flaticon-user"></i> Login/Register <span></span>
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
