import React from 'react';
import './UserOutput.css'

const useroutput = (props) => { 
    return (
        <div className="UserOutputStyle">
            <p> Output: {props.username} </p>
            <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX </p>
        </div>
    )
};

export default useroutput;