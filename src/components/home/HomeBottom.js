import React from 'react';

const HomeBottom = (props) => {
    
    const { img, name, description, time, fee } = props;

    return (
        <div>
            <img src = { img } alt = 'restaurant' />
            <h3>{ name }</h3>
            <p>{ description }</p>
            <p>{ time }</p>
            <p>{ fee }</p>
        </div>
    )

}

export default HomeBottom;