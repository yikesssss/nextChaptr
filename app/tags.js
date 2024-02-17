'use client';

import { useState } from 'react';



// export default function Tagsing() {
//     const [tags, setTags] = useState([]);
//     return <button onClikc={handleClick}></button>;
// }

const handleSubmit = (p) => {
    console.log(p);
}

export function Goals() {
    const goals = ["Walkability", "Education", "Community", "farm", "Job Opportunities", "Warm", "Cold", "Safety", "Diversity"];

    const [selectedGoals, setSelectedGoals] = useState("");

    const handleGoalClick = (goal) => {
        setSelectedGoals(goal);
    }

    return (<div>
        <h2>Pick your goals</h2>
        <ul>
            {goals.map((goal) => ( 
                <button key={goal} onClick={() => handleGoalClick(goal)}> {goal} </button>
            ))}
        </ul>
        <button onClick={handleSubmit(selectedGoals)}>Submit</button>
    </div>)
}

export function Income() {
    const incomes = ["Less than $30,000", "$30,000 - $50,000", "$50,000 - $70,000", "$70,000 - $90,000", "$90,000 - $120,000", "$120,000 - $150,000", "Over $150,000"]

    return ( <div>
        <h2>Pick your income</h2>
        <ul>
            {incomes.map((income) => (
                <button> {income} </button>
            ))}
        </ul>
        <button >Submit</button>
    </div>)
}