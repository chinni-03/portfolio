import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';

function Navbar () {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    const toggleNavbar = () => {
        document.getElementsByClassName('navbar-div')[0].classList.toggle('display');
        document.getElementsByClassName('navbar')[0].classList.toggle('display');
        document.getElementsByClassName('gmail')[0].classList.toggle('display');
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-div');
            if (window.scrollY > 20) {
                navbar.style.backgroundColor = '#242831';
            } else {
                navbar.style.backgroundColor = 'transparent';
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className="navbar-div">
                <Link to='/'><img src="/../../images/logo.png" alt="logo" /></Link>
                <i className="fa-solid fa-caret-down" onClick={toggleNavbar}></i>
                <nav className="navbar">
                    <ul>
                        <li><Link to='/' style={linkStyle}>Home</Link></li>
                        <li><Link to='/about' style={linkStyle}>About</Link></li>
                    </ul>
                </nav>
                <Link to='mailto:harshinivk12@gmail.com'><img className="gmail" src="/../../images/gmail.png" alt="gmail" /></Link>
            </div>
        </>
    )
}

export default Navbar;
