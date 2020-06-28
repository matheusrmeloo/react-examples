import React from 'react';

function WithParameter(props) {
    return (
        <div>
            <h2>
                Title: {props.title}
            </h2>
            <h3>
                Subtitle: {props.subtitle}
            </h3>
        </div>
    )
}

export{
    WithParameter
}