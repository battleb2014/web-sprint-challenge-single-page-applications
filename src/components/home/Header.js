import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <header>
            <h3>Lambda Eats</h3>
            <nav>
                <Link to = '/'>
                    <button>Home</button>
                </Link>
                <button>Help</button>
            </nav>
        </header>
    )

}

export default Header;