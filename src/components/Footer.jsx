import { Link } from 'react-router-dom';

function Footer() {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <>
        <div className="footer">
            <div className='name'>
                <div><img src="/../../images/logo.png" alt="" /></div>
                <h2>Harshini Vijendra Kumar</h2>
            </div>
            <div className='links'>
                <Link to='mailto:harshinivk12@gmail.com' style={linkStyle}>Harshini Vijendra Kumar<img className="gmail" src="/../../images/gmail.png" alt="gmail" /></Link>
                <Link to='https://www.linkedin.com/in/harshini-vijendra-kumar/' style={linkStyle}>Harshini Vijendra Kumar<img className="gmail" src="/../../images/linkedin.png" alt="linkedin" /></Link>
            </div>
            <p>@copyright, 2024, Harshini Vijendra Kumar</p>
        </div>
        </>
    )
}

export default Footer;