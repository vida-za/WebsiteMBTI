import React from "react";
import { Link } from "react-router-dom";
import '../style/Tests.css';

export default function Tests() {
    return (
        <div className="tests">
            <h1>Выберите тест</h1>
            <div className="cards">
                <Link to="/mbti" className="card">
                    <h3>MBTI тест</h3>
                    <p>Узнай свой тип личности по Майерс-Бриггс</p>
                </Link>
                <Link to="/ennea" className="card">
                    <h3>Ennea тест</h3>
                    <p>Узнай свой тип личности по эннеаграмме</p>
                </Link>
            </div>
        </div>
    );
}