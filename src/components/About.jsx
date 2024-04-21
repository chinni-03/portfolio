import Navbar from "./Navbar";
import exp from "../we";
import edu from "../edu";
import awards from "../awards";
import lang from "../lang";
import Footer from "./Footer";

function About() {
    return (
        <>
        <Navbar />
        <div className="d-flex main-page about">
            <div className="me-div"><img className="img" src="/../../images/me.jpeg" alt="" /></div>
            <div id="about" className="about-div">
                <h1>Harshini Vijendra Kumar</h1>
                <p className="desc">I am a Junior (pre-final year undergraduate student) majoring in Computer Science and Engineering.</p>
                <div className="exp">
                    <h2>Work Experience</h2>
                    <div className="container bottom-100">
                        <div className="row">
                            { exp.map((ex, index) => (
                                <div key={ex.id} className="col-12 mt-4">
                                    <p>{ex.title}, <i>{ex.company}</i></p>
                                    <p className="desc-light">{ex.desc}</p>
                                    {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="edu">
                    <h2>Education</h2>
                    <div className="container bottom-100">
                        <div className="row">
                            { edu.map((ex, index) => (
                                <div key={ex.id} className="col-12 mt-4">
                                    <p>{ex.degree}, <i>{ex.institute}</i></p>
                                    <p className="desc-light">{ex.grade}</p>
                                    {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="edu">
                    <h2>Awards</h2>
                    <div className="container bottom-100">
                        <div className="row">
                            { awards.map((ex, index) => (
                                <div key={ex.id} className="col-12 mt-4">
                                    <p>{ex.title}, <i>{ex.institute}</i></p>
                                    <p className="desc-light">{ex.desc}</p>
                                    {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="edu">
                    <h2>Spoken Languages</h2>
                    <div className="container bottom-100">
                        <div className="row">
                            { lang.map((ex, index) => (
                                <div key={ex.id} className="col-12 mt-4">
                                    <p>{ex.language}</p>
                                    {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-footer">
            <Footer></Footer>
        </div>
        </>
    );
}

export default About;