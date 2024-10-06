import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";
import { GiQueenCrown } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { MdHandyman } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";


const AdminDashboard = () => {
    const [isNavigationActive, setIsNavigationActive] = useState(false);

    const handleToggleClick = () => {
        setIsNavigationActive(!isNavigationActive);
    };

    const handleMouseOver = (event) => {
        const listItems = document.querySelectorAll(".navigation li");
        listItems.forEach(item => {
            item.classList.remove("hovered");
        });
        event.target.closest("li").classList.add("hovered");
    };

    return (
        <div className="container">
            <div className={`navigation ${isNavigationActive ? 'active' : ''}`}>
                <ul>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/">
                            <span className="icon">
                            <GiQueenCrown className="react-icon"/>

                            </span>
                            <span className="title">Gael Sánchez Lobato</span>
                        </Link>
                    </li>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/">
                            <span className="icon">
                            <TiHome className="react-icon"/>

                            </span>
                            <span className="title">Inicio</span>
                        </Link>
                    </li>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/about">
                            <span className="icon">
                            <BsFillPersonVcardFill className="react-icon"/>
                            </span>
                            <span className="title">Perfil</span>
                        </Link>
                    </li>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/projects">
                            <span className="icon">
                            <MdSchool className="react-icon"/>
                            </span>
                            <span className="title">Proyectos</span>
                        </Link>
                    </li>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/skills">
                            <span className="icon">
                            <MdHandyman className="react-icon"/>
                            </span>
                            <span className="title">Habilidades</span>
                        </Link>
                    </li>
                    <li onMouseOver={handleMouseOver}>
                        <Link to="/contact">
                            <span className="icon">
                            <SiMinutemailer className="react-icon"/>
                            </span>
                            <span className="title">Contacto</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className={`main ${isNavigationActive ? 'active' : ''}`}>
                <div className="topbar">
                    <div className="toggle" onClick={handleToggleClick}>
                    <GiHamburgerMenu className="react-icon"/>

                    </div>
                </div>
                <div className="cardBox">
                    Contacto
                </div>
                <div className="details">
                    <div className="recentOrders">
                        
                    </div>
                    <div className="recentCustomers">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
