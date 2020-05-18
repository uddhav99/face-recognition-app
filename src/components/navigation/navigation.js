import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className= 'f4 link dim black underline pa2 pointer mt0'>Sign Out</p>
        </nav>
    );
}

export default Navigation;