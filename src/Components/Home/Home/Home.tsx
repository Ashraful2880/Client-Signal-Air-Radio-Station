import React from 'react';
import About from '../../About/About';
import AllUsers from '../../AllUsers/AllUsers';
import CheckBulb from '../../CheckBulb/CheckBulb';
import Contact from '../../Contact/Contact';
import RadioStation from '../../RadioStation/RadioStation';
import Bannar from './Bannar/Bannar';

const Home = () => {
    return (
        <>
            <Bannar />
            <CheckBulb />
            <AllUsers />
            <RadioStation />
            <About />
            <Contact />
        </>
    );
};

export default Home;