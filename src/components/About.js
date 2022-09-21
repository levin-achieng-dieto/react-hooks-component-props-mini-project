import React from "react";

function About(props){
    return (
        <aside>
            <img alt="blog logo" src="https://via.placeholder.com/215">{props.image}</img>
            <p>{props.about}</p>
        </aside>
    )
}
export default About