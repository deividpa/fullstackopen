import React from 'react';

const Filter = ({searchTerm, onChange}) => {
    return (
        <div>
            <span>Find Countries: </span>
            <input type="text" value={searchTerm} onChange={onChange} />
        </div>
    );
};

export default Filter;