import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import homeAnime from "./../../assets/home_anime.gif";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        {/* <h1>Welcome to my portfolio!</h1>
        <p>This is Mohammed Junaid, a full stack dev and a creator</p> */}
        <h1>Hey, I'm Mohammed Junaid! </h1>
        <p>fullstack developer</p>
        {/* <p>Full Stack Developer</p> */}
        <span>
          I build interactive and beautiful <br /> websites with MERN.{" "}
        </span>
      </div>
      <div className="head-btns">
        <Link to="/projects" className="btn btn-white">
          <p className="btn-text">view my projects!</p>
        </Link>
        {/* <Link to="/contact" className="btn btn-white">
          <p className="btn-text">Connect with me</p>
        </Link> */}
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/mdjunaidap" target="_blank">
          <button>Twitter</button>
        </a>
        <a href="https://github.com/junaidapdev/" target="_blank">
          <button>Github</button>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-junaid-228b5319a/"
          target="_blank"
        >
          <button>Linkedin</button>
        </a>
      </div>
      {/* <div className='splash-image'>
        <img
            src={homeAnime}
            alt='animation'
            className='home-anime'
        />
    </div> */}
    </div>
  );
};

export default Home;
