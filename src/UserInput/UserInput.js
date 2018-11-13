import React from 'react';

const userinput = (props) => {

    const style = {
        bacgroundColor: '#000',
        font: 'inherit',
        border: '5px inset blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div>
            <p>Type something:</p>
            <input style={style} 
            type="text" 
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    )
};

export default userinput;