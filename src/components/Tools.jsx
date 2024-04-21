import React from "react";
import tools from "../tools";

function Tools () {

    return (
        <>
            <div className="tools-page">
                <p className="works-title font-52">Tools and Frameworks I'm Comfortable With</p>
                <div className="container text-center bottom-300">
                    <div className="row">
                        { tools.map((tool, index) => (
                            <div key={tool.id} className="col-12 col-sm-3 glow-on-hover">
                                <img src={tool.imageSrc} alt="card" />
                                {index % 2 === 1 && <div className="w-100 d-none d-sm-block" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools;
