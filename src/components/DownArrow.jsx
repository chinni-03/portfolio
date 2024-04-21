import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function DownArrow () {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    useEffect(() => {
        const handleScroll = () => {
            const arrow = document.querySelector('.fa-angle-down');
            if (window.scrollY > 20) {
                arrow.style.display = 'none';
            } else {
                arrow.style.display = 'flex';
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <Link to='/' style={linkStyle}><i className="fa-solid fa-angle-down fa-2xl"></i></Link>
        </>
    );
}

export default DownArrow;