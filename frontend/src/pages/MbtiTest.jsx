import { useState } from "react";
import '../style/Test.css';

const questions = [
    { id: 1, text: 'Вы расстраиваетесь, когда ваша забота о других остается недооцененной' },
    { id: 2, text: 'Вы сильно доверяете таинственному и подсознательному миру' },
    { id: 3, text: 'Вас пугает неопределённость и неизвестность' }
];

const answers = [
    { id: 1, text: 'Да'},
    { id: 2, text: 'Скорее да'},
    { id: 3, text: 'Скорее нет'},
    { id: 4, text: 'Нет'}
];

export default function MbtiTest() {
    const [mappingAnswers, setAnswers] = useState({});

    const handleAnswer = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value}));
    }

    const handleFinish = () => {
        console.log('Ответы:', mappingAnswers);
    }

    return (
        <div className="test-container">
            <h2 className="test-header">MBTI Тест</h2>
            {questions.map(q => (
                <div key={q.id} className="test-question-block">
                    <p className="test-question">{q.text}</p>
                    <div className="test-options">
                        {answers.map(a => (
                            <button key={a.id} onClick={() => handleAnswer(q.id, a.id)} className="option-button" data-selected={mappingAnswers[q.id] === a.id}>{a.text}</button>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleFinish} className="finish-button">Завершить</button>
        </div>
    );
}