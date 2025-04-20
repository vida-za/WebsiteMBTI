import React from "react";
import '../style/Test.css';

export default function QuestionBlock({ qusetion, answers, selected, onAnswer }) {
    return (
        <div className="test-question-block">
            <p className="test-question">{qusetion.text}</p>
            <div className="test-options">
                {answers.map(a => (
                    <button
                        key={a.id}
                        onClick={() => onAnswer(qusetion.id, a.id)}
                        className="option-button"
                        data-selected={selected === a.id}
                    >
                        {a.text}
                    </button>
                ))}
            </div>
        </div>
    )
}