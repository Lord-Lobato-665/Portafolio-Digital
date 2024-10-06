import React from 'react';
import "../styles/Home.css";
import { Link } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="background-home">
        <header className="tittle-home">Header</header>
        <br />
        <div className='contain-home'>

          <main className="main-home">
            main
            <p class="nf icon-size-css">
              <IoLogoCss3 />
              <span class="tooltip-css scale-in-ver-bottom">CSS</span>
            </p>

            <p class="nf icon-size-html">
              <FaHtml5 />
              <span class="tooltip-html scale-in-ver-bottom">HTML</span>
            </p>

            <p class="nf icon-size-js">
            <IoLogoJavascript />
              <span class="tooltip-js scale-in-ver-bottom">JAVASCRIPT</span>
            </p>

            <section className="section-home">Section 1</section>
            <section className="section-home">Section 2</section>
            <section className="section-home">Section 3</section>
          </main>

          <aside className="aside-home">Aside</aside>

          <article className="article-home"><Link to="/about">Article</Link></article>

        </div>

        <footer className="footer-home">Footer</footer>
      </div>
    </>
  )
}

export default Home