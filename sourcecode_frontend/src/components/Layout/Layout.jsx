import React from 'react';

const Layout = ({ children, background = "", containerName = "" }) => {

    let styles = {};

    if(background) {
        styles = {
            ...styles, backgroundImage: `url(${background})`
        }
    }

    return (
        <div className={`_layout ${containerName}`}
             style={styles}
        >
            { children }
        </div>
    );
};

export default Layout;