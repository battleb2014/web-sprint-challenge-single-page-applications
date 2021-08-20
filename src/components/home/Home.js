import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import './home.css'

const Home = () => {
    
    return (
        <Link to = '/'>
            <div className = 'body'>
                <HomeHeader />
                <HomeMain />
            </div>
        </Link>    
    )

}

export default Home;