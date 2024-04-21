import React from "react";

function WorkCard ({ imageSrc, caption }) {
    return (
        <>
            <div className="white-card">
                <img src={imageSrc} alt="work" />
            </div>
            <p className="content">
                {caption}
            </p>
        </>
    );
}

export default WorkCard;