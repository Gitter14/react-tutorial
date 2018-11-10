import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    if(props.username === undefined) {
        return (
            <div className="UserOutputStyle" key={'lkqwo'}>
                <p> Output: ??? </p>
                <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX </p>
            </div>           
        )
    } else {
        return (
            props.username.map( (item,index) =>
                <div className="UserOutputStyle" key={'lkqwo'+index}>
                    <p> Output: {item.username} </p>
                    <p> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX </p>
                </div>
            )
        )
    }
}

export default useroutput;