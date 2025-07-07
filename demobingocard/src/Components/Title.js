import React from 'react';
import '../Styles/Survey.css';
import {useNavigate} from 'react-router-dom';

function Title() {
    const navigate = useNavigate();
    return (
        <main>
            <h1>Western NC Tourism Bingo Survey</h1>
            <hr></hr>
            
            <button type='button' onClick={() => navigate("/survey")} aria-label='Start the survey'>Start Survey</button>
        </main>
    )
}

export default Title;