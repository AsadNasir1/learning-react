import React from "react";


const TestTag = props => (
<div>This is a test tag with next like syntax with a variable from props = {props.title}</div>
);


export default function NextApp() {
    return (
        <div>
            <p>this is next.js syntax</p>
            <TestTag title="TestTitle" />
            </div>
    );
}