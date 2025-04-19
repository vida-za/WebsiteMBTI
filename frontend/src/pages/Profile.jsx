import React from "react";
import '../style/Profile.css';

export default function Profile() {
    const profileData = {
        username: 'vida',
        joinDate: '24.07.2024',
    };

    return (
        <div className="profile">
            <h2 className="title">Личный кабинет</h2>
            <p className="login">
                <strong>Логин:</strong> {profileData.username}
            </p>
            <p className="join">
                <strong>Присоединился:</strong> {profileData.joinDate}
            </p>
        </div>
    );
}