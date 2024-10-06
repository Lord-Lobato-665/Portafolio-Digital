import React from 'react';
import "../styles/Sidebar.css";
import { GiQueenCrown } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="container">
            <div className="navigation">
                <ul>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <GiQueenCrown />
                            </span>
                            <span className="title">Gael Sánchez Lobato</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span className="title">Customers</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span className="title">Messages</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="help-outline"></ion-icon>
                            </span>
                            <span className="title">Help</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="title">Settings</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
