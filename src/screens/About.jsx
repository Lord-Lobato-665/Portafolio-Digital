import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";
import { GiQueenCrown } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { MdHandyman } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import profileImage from '../images/profile-image.jpeg';
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GiHoneycomb } from "react-icons/gi";
import { PiToolboxFill } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { GiArrowsShield } from "react-icons/gi";
import { GiStarMedal } from "react-icons/gi";
import { GiShatteredSword } from "react-icons/gi";
import { FaWolfPackBattalion } from "react-icons/fa6";


const AdminDashboard = () => {
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const welcomeText = '<h1>&lt;h1&gt Bienvenido a mi perfil &lt;/h1&gt</h1>';
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setWelcomeMessage(welcomeText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Intervalo de tiempo entre cada caracter (en milisegundos)

    return () => clearInterval(timer);
  }, []);



  const handleToggleClick = () => {
    setIsNavigationActive(!isNavigationActive);
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  };

  const handleMouseOver = (event) => {
    const listItems = document.querySelectorAll(".navigation li");
    listItems.forEach(item => {
      item.classList.remove("hovered");
    });
    event.target.closest("li").classList.add("hovered");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModalWithMessage = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      setModalMessage(modalMessage); // Actualizar el mensaje del modal solo cuando se abra el modal
    }
  }, [isModalOpen, modalMessage]);

  // Función para cerrar el modal cuando se hace clic en el fondo opaco
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className={`navigation ${isNavigationActive ? 'active' : ''}`}>
        <ul>
          <li onMouseOver={handleMouseOver}>
            <Link to="/">
              <span className="icon">
                <GiQueenCrown className="react-icon" />
              </span>
              <span className="title">{'< Gael Sánchez Lobato />'}</span>
            </Link>
            <div className="image-container">
              <img src={profileImage} alt="Imagen de perfil" className='profile-image' />
            </div>
          </li>
          <li onMouseOver={handleMouseOver}>
            <Link to="/">
              <span className="icon">
                <BsFillPersonVcardFill className="react-icon" />
              </span>
              <span className="title">{'< Perfil />'}</span>
            </Link>
          </li>
          <li onMouseOver={handleMouseOver}>
            <Link to="/projects">
              <span className="icon">
                <MdSchool className="react-icon" />
              </span>
              <span className="title">{'< Proyectos />'}</span>
            </Link>
          </li>
          <li onMouseOver={handleMouseOver}>
            <Link to="/skills">
              <span className="icon">
                <MdHandyman className="react-icon" />
              </span>
              <span className="title">{'< Habilidades />'}</span>
            </Link>
          </li>
          <li onMouseOver={handleMouseOver}>
            <Link to="/contact">
              <span className="icon">
                <SiMinutemailer className="react-icon" />
              </span>
              <span className="title">{'< Contacto />'}</span>
            </Link>
          </li>

        </ul>
      </div>
      <div className={`main ${isNavigationActive ? 'active' : ''}`}>
        <div className="topbar">
          <h1 className='title-page' dangerouslySetInnerHTML={{ __html: welcomeMessage }}></h1>
          <div className={`toggle ${isRotating ? 'rotate' : ''}`} onClick={handleToggleClick}>
            <GiHamburgerMenu className="react-icon" />
          </div>
        </div>
        <br />
        <br />
        <div className="details">

          <div className="recentOrders">
            <h3 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p> <p className="color-text">¿Cuáles son mis intereses?</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p></h3>
            <br />
            <br />
            <br />
            <p Como className="color-text"> Como desarrollador apasionado por explorar nuevas tecnologías y encontrar la combinación perfecta entre el desarrollo back-end y front-end, el mundo del desarrollo multiplataforma es una aventura emocionante que no puedo esperar para explorar. Me encanta desafiar los límites de lo posible y crear productos que no solo sean funcionales, sino también visualmente atractivos y fáciles de usar para los usuarios.</p>
            <br />
            <p className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'br'}</p><p className='tag-slash'>{'/'}</p><p className="tag-right">{'> '}</p></p>
            <br />
            <br />
            <p Como className="color-text">El desarrollo multiplataforma me ofrece la oportunidad perfecta para fusionar mis habilidades de programación con mi pasión por el diseño, creando aplicaciones que no solo funcionen sin problemas en una variedad de dispositivos y sistemas operativos, sino que también ofrezcan una experiencia visual cómoda e intuitiva para los usuarios.</p>
            <br />
            <p className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'br'}</p><p className='tag-slash'>{'/'}</p><p className="tag-right">{'> '}</p></p>
            <br />
            <br />
            <br />

            <div className="icons-container">

              <div className="icon-container">
                <p class="fn icon-size-db">
                  <BsDatabaseFillCheck onClick={() => openModalWithMessage('Me interesa aprender todo lo que pueda sobre bases de datos')} />
                  <span class="tooltip-db scale-in-ver-bottom">Bases de datos SQL y no SQL</span>
                </p>
              </div>

              <div className="icon-container">
                <p class="fn icon-size-honey">
                  <GiHoneycomb onClick={() => openModalWithMessage('Me agrada relacionarme con todo las integrantes de un equipo')} />
                  <span class="tooltip-honey scale-in-ver-bottom">Trabajo en equipo</span>
                </p>
              </div>

              <div className="icon-container">
                <p class="fn icon-size-tool">
                  <PiToolboxFill onClick={() => openModalWithMessage('Me motiva el tener todas las herramientas bien organizadas')} />
                  <span class="tooltip-tool scale-in-ver-bottom">Administración de herramientas</span>
                </p>
              </div>

              <div className="icon-container">
                <p class="fn icon-size-brain">
                  <GiBrain onClick={() => openModalWithMessage('Siempre estoy dispuesto a mejorar mis conocimientos si soy de más utilidad')} />
                  <span class="tooltip-brain scale-in-ver-bottom">Compromiso con el aprendizaje</span>
                </p>
              </div>

              <div className="icon-container">
                <p class="fn icon-size-shield">
                  <GiArrowsShield onClick={() => openModalWithMessage('Me divierto al llegar a mi límite y mejoro de manera exponencial para superarlo')} />
                  <span class="tooltip-shield scale-in-ver-bottom">Desafiar mis límites</span>
                </p>
              </div>

            </div>

          </div>
          <div className="recentCustomers">
            <h3 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p> <p className="color-text">¿Quién soy?</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p></h3>
            <br />
            <br />
            <p Como className="color-text"> ¡Hola! Mi nombre es Gael Sánchez Lobato y actualmente resido en la hermosa ciudad de Cancún, Quintana Roo. Me considero una persona comprometida y carismática, con una gran habilidad para adaptarme a cualquier entorno de trabajo.</p>
            <br />
            <p className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'br'}</p><p className='tag-slash'>{'/'}</p><p className="tag-right">{'> '}</p></p>
            <br />
            <p Como className="color-text">Destaco por mi rápido aprendizaje y mi capacidad para trabajar eficientemente bajo presión. Poseo un pleno dominio de mis emociones, lo que me permite mantener la calma y el enfoque incluso en situaciones desafiantes.</p>
            <br />
            <br />

            <div className="icons-container-2">

            <div className="icon-container">
              <p class="fn icon-size-medal">
              <GiStarMedal onClick={() => openModalWithMessage('Me agrada competir siempre y cuando sea de forma sana')} />
                <span class="tooltip-medal scale-in-ver-bottom">Competencia</span>
              </p>
            </div>

            <div className="icon-container">
              <p class="fn icon-size-sword">
              <GiShatteredSword onClick={() => openModalWithMessage('Soy muy perseverante, considero que es de mis mejores virtudes')} />
                <span class="tooltip-sword scale-in-ver-bottom">Perseverancia</span>
              </p>
            </div>

            <div className="icon-container">
              <p class="fn icon-size-carism">
              <FaWolfPackBattalion onClick={() => openModalWithMessage('Tengo una personalidad extrovertida y muy alegre, no tengo problemas con socializar con personas nuevas')} />
                <span class="tooltip-carism scale-in-ver-bottom">Carisma</span>
              </p>
            </div>

            </div>

            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="recentOrders-2">
          <h3 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p> <p className="color-text">Educación</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h3'}</p><p className="tag-right">{'> '}</p></h3>
          <br />
          <br />
          <br />
          <h4 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p><p className="color-text"> Técnico Superior Universitario en Tecnologías de la Información - Área: Desarrollo de Software Multiplataforma </p><p className="tag-left">{' <'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'>'}</p></h4>
          <br />
          <h4 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p> <p className="color-text">Universidad Tecnológica de Cancún - Periodo de Estudio: 2022 - Actualidad</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p></h4>
          <br />
          <p className='color-text'>Actualmente, estoy cursando la carrera de TSU en Tecnologías de la Información con especialización en Desarrollo de Software Multiplataforma en la Universidad Tecnológica de Cancún. Durante mi tiempo en la universidad, he participado en diversos proyectos escolares que abarcan tanto el desarrollo web como sistemas embebidos. Además, he tenido la oportunidad de involucrarme en trabajos sociales que han contribuido al desarrollo de mis habilidades de trabajo en equipo y comunicación interpersonal.</p>
          <br />
          <p className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'br'}</p><p className='tag-slash'>{'/'}</p><p className="tag-right">{'> '}</p></p>
          <br />
          <h4 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p> <p className="color-text">Capacitación en Tecnologías de la Información</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p></h4>
          <br />
          <h4 className='h-flex'><p className="tag-left">{'<'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p> <p className="color-text">Bachilleres Plantel Cancún 2 - Periodo de Estudio: 2019-2022</p> <p className="tag-left">{'<'}</p><p className='tag-slash'>{'/'}</p><p className='tag-center'>{'h4'}</p><p className="tag-right">{'> '}</p></h4>
          <br />
          <p className='color-text'>Durante mi educación en Bachilleres Plantel Cancún 2, me especialicé en Tecnologías de la Información, donde descubrí mi pasión por la resolución de problemas en el ámbito tecnológico. Durante este tiempo, participé en varios proyectos y tareas relacionadas con el diseño web, bases de datos y programación, lo que me brindó una sólida base para mi futura carrera en el campo de la tecnología.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;