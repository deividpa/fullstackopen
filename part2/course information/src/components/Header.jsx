import React from 'react';

const Header = ({ text, main }) => {
    if(main) {
        return <h1>{text}</h1>;
    }

    return <h2>{text}</h2>;
};

export default Header;