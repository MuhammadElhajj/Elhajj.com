import "./About.css";
import AboutPicture from "../images/AboutPicture.jpg";

function About() {
  return (
    <div className="About">
      <div className="About__Part__One">
        <h2 className="About__Part__One__H2">ABOUT ME</h2>
        <div className="About__Part__One__Information">
          <span className="About__Part__One__Information__p__Open__Tag">&lt;p&gt;</span>
          <span className="About__Hello">Hello !</span>
          <p className="About__Information__P">My name is Muhammad and I am specialize in Web developement  that utilizes <span>HTML</span> , <span>Css</span> , <span>JS</span> and <span>React.js</span> etc</p>
          <p className="About__Information__P">I am a highly motivated and eternal optimist dedicated to write clear, concies, Robust code that work. Striving to never stop learning programming and improving myself.</p>
          <p className="About__Information__P">When I am not coding, I am <span>Writing Blogs</span>, reading, or picking up some new hands-on art project like <span>photography</span></p>
          <p className="About__Information__P">I like to have my perspctive and belief system challenged so I see the world through new eyes</p>
          <span className="About__Part__One__Information__p__Close__Tag">&lt;/p&gt;</span>
        </div>
      </div>
      <div className="About__Part__Tow">
        <img className="About__Part__Tow__Picture" src={AboutPicture} alt="" />
      </div>
    </div>
  );
}

export default About;
