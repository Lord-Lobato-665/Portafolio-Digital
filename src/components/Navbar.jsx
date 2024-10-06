import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { TiHome } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdHandyman } from "react-icons/md";
import { MdContacts } from "react-icons/md";


const links = [
  {
    name: "<Inicio/>",
    href: "/",
    icon: <TiHome className='icon-sidebar'/>,
  },
  {
    name: "<Sobre mi/>",
    href: "/about",
    icon: <FaInfoCircle className='icon-sidebar'/>,
  },
  {
    name: "<Proyectos/>",
    href: "/projects",
    icon: <MdSchool className='icon-sidebar'/>,
  },
  {
    name: "<Habilidades/>",
    href: "/skills",
    icon: <MdHandyman className='icon-sidebar'/>,
  },
  {
    name: "<Contacto/>",
    href: "/contact",
    icon: <MdContacts className='icon-sidebar'/>,
  },
]

function Navbar() {
  return (
    <>

      <div className="navbar-contain">

        <div className="navbar-elements">
          {links.map((link) => (
            <Link to={link.href}>
              <div className="display">
              {link.name}
              {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
};

export default Navbar