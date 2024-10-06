import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import { GrProjects } from "react-icons/gr";
import { HiHome } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoIosConstruct } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const Sidebar = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        const transformSound = document.getElementById('transformSound');
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            transformSound.play();
        }
    };

    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            const menu = document.querySelector('.menu');
            if (menu && !menu.contains(event.target)) {
                menu.classList.remove('active');
            }
        };

        document.addEventListener('click', handleClickOutsideMenu);

        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        };
    }, []);

    return (
        <>
            <ul className="menu">
                <div className="menuToggle" onClick={toggleMenu}><GrProjects /></div>
                <li style={{ '--i': 2, '--clr': '#04fc43' }}><Link to="/"><HiHome className='icon-icon' /></Link></li>
                <li style={{ '--i': 3, '--clr': '#fe01f1' }}><Link to="/about"><FaUserTie className='icon-icon' /></Link></li>
                <li style={{ '--i': 4, '--clr': '#00b0fe' }}><Link to="/projects"><IoDocumentAttachSharp className='icon-icon' /></Link></li>
                <li style={{ '--i': 5, '--clr': '#fea600' }}><Link to="/skills"><IoIosConstruct className='icon-icon' /></Link></li>
                <li style={{ '--i': 6, '--clr': '#a529ff' }}><Link to="/contact"><FaPhoneVolume className='icon-icon' /></Link></li>
            </ul>

            <audio id="transformSound">
                <source src="/Sounds/transform.mp3" type="audio/mpeg" />
            </audio>
        </>
    );
};

export default Sidebar;
