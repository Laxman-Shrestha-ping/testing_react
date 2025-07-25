import React from 'react';
import './Home.css';
const home = () => {
  return (
    <div>
      <section className="home">
      <div className="home-content">
        <h1> Hi, I'm Laxman Shrestha</h1>
        <h2> Frontend Developer & React Proffesor</h2>
        <p>
            I'm a frontend developer with a passion for creating dynamic and responsive web applications. 
            I specialize in React and have a strong foundation in JavaScript, HTML, and CSS. 
            My goal is to build user-friendly interfaces that enhance the user experience.
        </p>
        <button className="home-btn">Download CV</button>
      </div>
  <div className="home-img">
        <img src="Home.jpg" alt="Laxman Shrestha" />
        </div>
        </section>
    </div>
  );
}
export default home;