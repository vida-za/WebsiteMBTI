import React from "react";
import '../style/History.css';

export default function History() {
    const historyData = {
        results: [
            {
                test_name: 'MBTI',
                date: '25-07-2024',
                res_id: 2
            },
            {
                test_name: 'Ennea',
                date: '26-07-2024',
                res_id: 4
            },
            {
                test_name: 'MBTI',
                date: '14-11-2024',
                res_id: 43
            }
        ]
    };

    return (
        <div className="history">
            <h2>История прохождений</h2>
            {historyData.results.map((item) => (
                <div key={item.res_id} className="history-item">
                    <p className="test-name">{item.test_name}</p>
                    <p className="test-date">{item.date}</p>
                </div>
            ))}
        </div>
    );
}