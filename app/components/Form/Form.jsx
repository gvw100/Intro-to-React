"use client";

import { useState } from 'react'

export default function Form(props) {

    const [ name, setName ] = useState("");
    const [ major, setMajor ] = useState("");

function handleName(e) {
    setName(e.target.value);
}

function handleMajor(e) {
    setMajor(e.target.value);
}

function handleCalculate() {
    props.handleCalculate(name, major)
}

    return (
        <div> 
            Name:
            <input 
            type="text" 
            value={name}
            onChange={handleName}/>

            Major
            <input type="text" value={major} onChange={handleMajor} />

            <button onClick={handleCalculate}>
                Calculate
            </button>
        </div>
    )
} 