import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Personal Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a software developer with a passion for building
            innovative and user-friendly applications. I have a strong
            background in various programming languages and I'm always looking
            to learn new technologies.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A brief description of the project goes here.</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>A brief description of the project goes here.</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>A brief description of the project goes here.</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            You can reach me at <a href="mailto:your@email.com">your@email.com</a>
          </p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
