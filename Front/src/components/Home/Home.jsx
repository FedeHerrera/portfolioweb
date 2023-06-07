import React from "react";
import Nav from "../Nav/Nav";
import "./Home.css"
import hero from './assets/images/wfh_1.svg'
import html from './assets/icons/icons8-html-5.svg'
import css from './assets/icons/icons8-css3.svg'
import js from './assets/icons/icons8-javascript.svg'
import bootstrap from './assets/icons/icons8-bootstrap.svg'
import reactnative from './assets/icons/icons8-react-native.svg'
import gitIcon from './assets/icons/icons8-git.svg'

function Home() {
      
    return (
        <>
        <Nav/>

        <section class="hero" id="about">
      <img
        src={hero}
        alt="jane-doe"
        loading="lazy"
        class="hero-img"
      />
      <div class="bio animate__animated animate__shakeX">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
          dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
          inventore tempore minus nemo, iste ullam illo laboriosam maiores
          repudiandae quos!
        </p>
      </div>
</section>

        <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* CSS Styles */}
        <link rel="stylesheet" href="assets/css/styles.css" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/icons/favicon-32x32.png"
        />

        {/* Animate CSS CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Jane Doe | Web Developer</title>
      </head>

      <body>
        {/* Navbar */}

        {/* Hero Section */}

        {/* More about */}
        <section class="more-about">
      <h2>More About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
        autem deleniti cupiditate molestias quis unde quae totam porro dicta
        iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        nostrum dolor minus, libero delectus praesentium perferendis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
        consequuntur labore? Ea totam voluptas amet!
      </p>
    </section>
        {/* Skills section */}
        <section class="skills" id="skills">
      <h2 class="skill-header">My Top Skills</h2>

      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img
            src={html}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={css}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={js}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        <div class="second-set animate__animated animate__pulse">
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={reactnative}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={gitIcon}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>
      </div>
    </section>
        {/* Projects section */}

        {/* Contact section */}

        {/* Social accounts - Fixed to the right */}

        {/* Scroll to top */}

        {/* Footer section */}

        {/* Website scripts */}
        <script src="assets/js/app.js"></script>

        {/* Ion icons scripts */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>


      </>
    )
  }
    
  export default Home;