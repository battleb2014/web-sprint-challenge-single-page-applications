import React from 'react';

const HomeBottom = (props) => {
    
    const { restaurants } = props;

    return (
        <div>
            <img src = { restaurants.img } alt = 'restaurant' />
            <h3>{ restaurants.name }</h3>
            <p>{ restaurants.description }</p>
            <p>{ restaurants.time }</p>
            <p>{ restaurants.fee }</p>
        </div>
    )

}

export default HomeBottom;