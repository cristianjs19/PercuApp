import React from 'react';
import Botones4 from '../components/Botones4';
import Metronome from '../components/Metronome';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <div className="paginas">
            <Botones4 />
            <Metronome />
        </div>
    );
};

export default HomePage;