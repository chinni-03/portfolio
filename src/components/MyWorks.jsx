import React from "react";
import WorkCard from "./WorkCard";
import projects from "../projects";

function MyWorks () {
    return (
        <>
            <div className="work-page">
                <p className="works-title font-52 bottom-300">My Works</p>
                <div className="container text-center">
                    <div className="row">
                        { projects.map((project, index) => (
                            <div key={project.id} className="col-12 col-sm-6 bottom-300">
                                <WorkCard imageSrc={project.imageSrc} caption={project.caption} />
                                {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWorks;