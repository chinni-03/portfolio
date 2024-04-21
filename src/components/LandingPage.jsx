import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function LandingPage () {

    const [typewriterActive, setTypewriterActive] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setTypewriterActive(false)
            } else {
                setTypewriterActive(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="main-page">
                <img src="/../../images/logo.png" alt="main-logo" />
                <div className="margin-left">
                    <p className="greeting font-52">Namaste!<br />I am <span>Harshini</span><br /> Vijendra Kumar.</p>
                    <p className="typewriter">
                        {typewriterActive && (
                            <Typewriter
                                options={{
                                strings: ["A Programmer", "A Web Developer", "An UI/UX Designer"],
                                autoStart: true,
                                loop: true
                                }}
                            />
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}

export default LandingPage;