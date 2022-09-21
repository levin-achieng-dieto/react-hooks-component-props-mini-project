import React from "react";

Article.defaultProps = {
    date: "January 1, 1970"
}

function Article(props){
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
}
export default Article