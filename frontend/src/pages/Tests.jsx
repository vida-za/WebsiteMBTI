import React from "react";
import '../style/Tests.css';

export default function Tests() {
    return (
        <main className="tests">
            <h1>Выберите тест</h1>
            <div className="cards">
                <div className="card">
                    <h3>MBTI тест</h3>
                    <p>Узнай свой тип личности по Майерс-Бриггс</p>
                </div>
                <div className="card">
                    <h3>Ennea тест</h3>
                    <p>Узнай свой тип личности по эннеаграмме</p>
                </div>
            </div>
        </main>
    );
}