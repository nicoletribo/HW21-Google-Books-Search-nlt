import React from "react";

export function Card(props) {
    return (
        <div className="card text-center" style={{ marginBottom: "20px" }}>
            <div className="card-header">
                <h5>{props.heading}</h5>
            </div>
            <div className="card-body text-left">
                {props.children}
            </div>
        </div>
    );
}
export default Card;