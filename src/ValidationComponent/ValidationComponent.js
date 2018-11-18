import React from 'react';
import './ValidationComponent.css'

const validationComponent = (props) => {

    let display = (<p>Text not long enough.</p>);

    if (props.textlength > props.treshold){
        display = (<p>Text length is OK.</p>);
    }

    return(
        <div key='InputLengthValidation' className="validationComponentClsss">
            {display}
        </div>
    );
}

export default validationComponent;