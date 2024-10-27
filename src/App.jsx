// App.js
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

function App() {
    const [cards, setCards] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = JSON.parse(e.target.result);
            setCards(content);
        };
        reader.readAsText(file);
    };

    return (
        <div className="app">
            <h1>German-English Flashcards</h1>
            <input type="file" onChange={handleFileUpload} accept=".json" />
            <div className="flashcard-container">
                {cards.map((card, index) => (
                    <Flashcard key={index} german={card.german} english={card.english} />
                ))}
            </div>
        </div>
    );
}

export default App;
