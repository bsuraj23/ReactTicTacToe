// Flashcard.js
import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ german, english }) {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => setFlipped(!flipped);

    return (
        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={flipCard}>
            <div className="flashcard-front">{german}</div>
            <div className="flashcard-back">{english}</div>
        </div>
    );
}

export default Flashcard;
