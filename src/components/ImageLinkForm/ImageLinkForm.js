import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onButtonSubmit, onEnterPress }) => {
    return (
        <div>
            <p className= "f3">
                This has the ability to detect faces. Come, give it a try!
            </p>
            <div className='center'>
                <div className= 'form center pa3 b3 shadow-5'>
                    <input className= "f4 pa1 w-80" type='text' onChange={onInputChange} onKeyPress={onEnterPress}/>
                    <button className= "w-20 grow f4 link ph3 pv2 dib white bg-dark-blue" onClick={onButtonSubmit}>
                        Detect it!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;