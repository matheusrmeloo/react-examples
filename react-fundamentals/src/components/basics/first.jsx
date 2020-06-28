import React from 'react';

function First() {
    let msg = "Were Welcome!"
    return (
        <div>
            <h2>
                First Component
            </h2>
            <p>
                {msg}
            </p>
        </div>
    )
}

export {
    First
}