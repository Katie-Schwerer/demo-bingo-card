import React, { useState } from 'react';
import '../Styles/Survey.css'

const questions = [
    {
        type: "checkbox",
        question: "What types of activities are you most interested in?",
        options: ["Food", "Museums", "Parks", "Shopping", "Art", "Music", "Hiking", "Camping", "Landmarks", "Famous Locations"]
    },
    {
        type: "checkbox",
        question: "Which season(s) do you most enjoy for participating in activities?",
        options: ["Spring", "Summer", "Fall", "Winter"]
    },
    {
        type: "radio",
        question: "When would you prefer to participate in activities?",
        options: ["Weekend", "Weekday", "Both"]
    },
    {
        type: "checkbox",
        question: "Which outdoor sports do you enjoy?",
        options: ["Skiing", "Snowboarding", "Golf", "Horseback Riding", "Fishing", "Ziplining", "Rock Climbing", "Kayaking", "White Water Rafting", "No Sports", "Other"]
    },
    {
        type: "radio",
        question: "Are pet-friendly locations important to you?",
        options: ["Yes", "No"]
    },
    {
        type: "radio",
        question: "Do you have any accessibility needs or requirements that would help us better support your participation?",
        options: ["Yes", "No"]
    },
    {
        type: "radio",
        question: "Are family-friendly locations important to you?",
        options: ["Yes", "No"]
    }, 
    {
        type: "text",
        question: "Are there any cities, towns, or regions in North Carolina you’d like us to consider for these activities?",
        options: []
    },
    {
        type: "text",
        question: "Is there anything else you’d like to share that would help us better plan or support your participation?",
        options: []
    }

];

/*let foodOptions = [
    {label: "Restaurants", value: "Restaurants"},
    {label: "Food Trucks", value: "Food Trucks"},
    {label: "Breweries", value: "Breweries"},
    {label: "Wineries", value: "Wineries"},
    {label: "Bakeries", value: "Bakeries"},
    {label: "Coffee Shops", value: "Coffee Shops"},
    {label: "Farmers Markets", value: "Farmers Markets"},
    {label: "Food Festivals", value: "Food Festivals"},
]*/

/*let hikinglevelOptions = [
    {label: "Easy", value: "Easy"},
    {label: "Moderate", value: "Moderate"},
    {label: "Difficult", value: "Difficult"},
];*/


function Survey() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle form submission or completion
            console.log("Survey completed");
        }
    };
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    return (
        <main>
            <form>
                {questions[currentQuestionIndex].type === "radio" ? (
                    <fieldset>
                        <legend>{questions[currentQuestionIndex].question}</legend>
                        {questions[currentQuestionIndex].options.map(item => (
                            <label key={item}>
                                <input type="radio" value={item} />{item}
                            </label>
                        ))}
                    </fieldset>
                ): questions[currentQuestionIndex].type === "checkbox" ? (
                    <fieldset>
                        <legend>{questions[currentQuestionIndex].question}</legend>
                        {questions[currentQuestionIndex].options.map(item => (
                            <label key={item}>
                                <input type="checkbox" value={item} />{item}
                            </label>
                        ))}
                    </fieldset>
                ): <div>
                        <h3>{questions[currentQuestionIndex].question}</h3>
                        <textarea></textarea>
                    </div>}
            </form>
            <button onClick={handlePrevious} type="button" aria-label='Previous Question' disabled={currentQuestionIndex === 0}> Previous</button>
            <button onClick={handleNext} type="button" aria-label='Next Question' disabled={currentQuestionIndex === questions.length - 1}> Next</button>
        </main>
    );
}

export default Survey;