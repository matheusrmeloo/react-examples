import React from "react";

function Random(props) {
    let random = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            { random }
        </div>
    )
}

export {
    Random
}