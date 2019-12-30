import React from 'react';

function RenderGreeting({greeting, name, path}) {
    return (
        <div>{greeting}, {name} from {path}</div>
    )
}

export default RenderGreeting;