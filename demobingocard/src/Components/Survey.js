import React from 'react';
import '../Styles/Survey.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

let activitiesOptions = [
    {label: "Food", value: "Food"},
    {label: "Museums", value: "Museums"},
    {label: "Parks", value: "Parks"},
    {label: "Shopping", value: "Shopping"},
    {label: "Art", value: "Art"},
    {label: "Music", value: "Music"},
    {label: "Hiking", value: "Hiking"},
    {label: "Camping", value: "Camping"},
    {label: "Landmarks", value: "Landmarks"},
    {label: "Famous Locations", value: "Famous Locations"},
];

let foodOptions = [
    {label: "Restaurants", value: "Restaurants"},
    {label: "Food Trucks", value: "Food Trucks"},
    {label: "Breweries", value: "Breweries"},
    {label: "Wineries", value: "Wineries"},
    {label: "Bakeries", value: "Bakeries"},
    {label: "Coffee Shops", value: "Coffee Shops"},
    {label: "Farmers Markets", value: "Farmers Markets"},
    {label: "Food Festivals", value: "Food Festivals"},
]

let seasonsOptions = [
    {label: "Spring", value: "Spring"},
    {label: "Summer", value: "Summer"},
    {label: "Fall", value: "Fall"},
    {label: "Winter", value: "Winter"},
];

let weekOptions = [
    {label: "Weekend", value: "Weekend"},
    {label: "Weekday", value: "Weekday"},
    {label: "Both", value: "Both"},
];

let sportsOptions = [
    {label: "Skiing", value: "Skiing"},
    {label: "Snowboarding", value: "Snowboarding"},
    {label: "Golf", value: "Golf"},
    {label: "Horseback Riding", value: "Horseback Riding"},
    {label: "Fishing", value: "Fishing"},
    {label: "Ziplinging", value: "Ziplining"},
    {label: "Rock Climbing", value: "Rock Climbing"},
    {label: "Kayaking", value: "Kayaking"},
    {label: "White Water Rafting", value: "White Water Rafting"},
    {label: "Other", value: "Other"},
]

let petOptions = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"},
]

let accessibilityOptions = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"},
];

let kidFriendlyOptions = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"},
];

let hikinglevelOptions = [
    {label: "Easy", value: "Easy"},
    {label: "Moderate", value: "Moderate"},
    {label: "Difficult", value: "Difficult"},
];

const validationSchema = Yup.object({
    activities: Yup.array().min(1, 'Please select at least one activity.'),
    /*food: Yup.array().when('activities', {
        is: (activities) => Array.isArray(activities) && activities.includes("Food"),
        then: Yup.array().min(1, 'Please select at least one food option.'),
        otherwise: Yup.array().notRequired(),
    }),*/
    /*hikingLevel: Yup.string().when('activities', {
        is: (activities) => Array.isArray(activities) && activities.includes("Hiking"),
        then: Yup.string().required('Please select a hiking level.'),
        otherwise: Yup.string().notRequired(),
    }),*/
    seasons: Yup.array().min(1, 'Please select at least one season.'),
    week: Yup.string().required('Please select a preferred time for activities.'),
    sports: Yup.array().min(1, 'Please select at least one sport.'),
    /*otherSports: Yup.string().when('sports', {
        is: (sports) => Array.isArray(sports) && sports.includes("Other"),
        then: Yup.string().required('Please specify other sports.'),
        otherwise: Yup.string().notRequired(),
    }),*/
    accessibility: Yup.string().required('Please specify your accessibility needs.'),
    petFriendly: Yup.string().required('Please specify if pet-friendly locations are important to you.'),
    kidFriendly: Yup.string().required('Please specify if kid-friendly locations are important to you.'),
    location: Yup.string().notRequired(),
    comments: Yup.string().notRequired(),
});

function Survey() {
    let navigate = useNavigate();
    return (
        <main>
            <h1>Western Bingo Card Survey</h1>
            <hr></hr>
            <Formik initialValues={{
                activities: [],
                food: [],
                hikingLevel: "",
                seasons: [],
                week: "",
                sports: [],
                otherSports: "",
                accessibility: "",
                petFriendly: "",
                kidFriendly: "",
                location: "",
                comments: ""
                }} 
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                    }}>
                {({ values }) => (
                    <Form>
                        <fieldset>
                            <legend>1. What types of activities are you most interested in? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {activitiesOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>   
                                        <Field type="checkbox" name="activities" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        {values.activities.includes("Food") && (
                            <fieldset>
                                <legend>1a. What food-rated places are you most interested in? <span>*</span></legend>
                                <div className='checkbox-group'>
                                    {foodOptions.map(option => (
                                        <label key={option.value} htmlFor={option.value}>
                                            <Field type="checkbox" name="food" value={option.value} id={option.value} />
                                            {option.label}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        )}
                        {values.activities.includes("Hiking") && (
                            <fieldset>
                                <legend>1b. What level of hiking difficulty do you prefer? <span>*</span></legend>
                                <div className='checkbox-group'>
                                    {hikinglevelOptions.map(option => (
                                        <label key={option.value} htmlFor={option.value}>
                                            <Field type="radio" name="hikingLevel" value={option.value} id={option.value} />
                                            {option.label}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        )}
                        <fieldset>
                            <legend>2. Which season(s) do you most enjoy for participating in activities? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {seasonsOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>
                                        <Field type="checkbox" name="seasons" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>3. When would you prefer to participate in activities? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {weekOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>   
                                        <Field type="radio" name="week" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>4. Which outdoor sports do you enjoy? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {sportsOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>
                                        <Field type="checkbox" name="sports" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        {values.sports.includes("Other") && (
                            <fieldset>
                                <legend>4a. What other sports do you enjoy? <span>*</span></legend>
                                <Field type="text" name="otherSports" placeholder="Enter other sports here..." />
                            </fieldset>
                        )}
                        <fieldset>
                            <legend>5. Do you have any accessibility needs or requirements that would help us better support your participation?<span>*</span></legend>
                            <div className='checkbox-group'>
                                {petOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>
                                        <Field type="radio" name="accessibility" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>6. Are pet-friendly locations important to you? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {accessibilityOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>
                                        <Field type="radio" name="petFriendly" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>7. Are kid-friendly locations important to you? <span>*</span></legend>
                            <div className='checkbox-group'>
                                {kidFriendlyOptions.map(option => (
                                    <label key={option.value} htmlFor={option.value}>
                                        <Field type="radio" name="kidFriendly" value={option.value} id={option.value} />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>8. Are there any cities, towns, counties or regions in North Carolina you'd like us to consider for these activities?</legend>
                            <Field as="textarea" name="location" placeholder="Enter locations here..." cols={100} rows={4} />
                        </fieldset>
                        <fieldset>
                            <legend>9. Do you have any additional comments or suggestions for us?</legend>
                            <Field as="textarea" name="comments" placeholder="Enter your comments here..." />
                        </fieldset>
                        <button type="submit" onClick={() => navigate("/board")}>Submit</button>
                    </Form>
                )}
            </Formik>
        </main>
    );
}

export default Survey;