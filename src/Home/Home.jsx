import "./Home.css";
import MyPicture from "../images/MyPicture.jpg";
import { BiEnvelope } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";

function Home() {
  return (
    <div className="Home">
      <h1 className="Home__Developer">Developer</h1>
      <div className="Home__Page">
        <div className="Developer__Information__One">
          <img
            className="Developer__Information__One__Picture"
            src={MyPicture}
            alt="MyPicture"
          />
          <h3>ElHajj</h3>
          <h5>Full_Stack Developer</h5>
          <div className="Little__skills__Info">
            <p>
              <BiEnvelope className="Little__skills__Info__Icon" />{" "}
              <span className="Little__skills__Info__Content">
                3muhammad.hajj.gmail.com
              </span>
            </p>
            <p>
              <CiLocationOn className="Little__skills__Info__Icon" />{" "}
              <span className="Little__skills__Info__Content">Syria</span>
            </p>
            <p>
              <BsBag className="Little__skills__Info__Icon" />{" "}
              <span className="Little__skills__Info__Content">
                Part-Time / FreeLancer
              </span>
            </p>
            <p>
              <BiLinkAlt className="Little__skills__Info__Icon" />
              <span className="Little__skills__Info__Content">
                Muhammad Elhajj Portfolio
              </span>
            </p>
          </div>
          <div className="Little__skills">
            <span>Html</span>
            <span>Css</span>
            <span>Js</span>
            <span>React</span>
          </div>
          <button className="Download__CV__Button">
            <span>
              Download CV <BiDownload className="Download__CV__Button__Icon" />
            </span>
          </button>
        </div>

        <div className="Developer__Information__Tow">
          <div>
            <span className="Developer__Information__Tow__h1__Open__Tag">
              &lt;h1&gt;
            </span>
            <h1 className="Developer__Information__Tow__h1">
              Hello <br />
              I'm{" "}
              <span className="Developer__Information__Tow__h1__Name">
                Muhammad
              </span>
              <br />
              Full_Stack Developer{" "}
              <span className="Developer__Information__Tow__h1__Close__Tag">
                &lt;/h1&gt;
              </span>
            </h1>
            <span className="Developer__Information__Tow__p__Open__Tag">
              &lt;p&gt;
            </span>
            <p className="Developer__Information__Tow__p">
              I help business to grow by creating amazing web experiences. If
              you're <br /> looking for a Developer who like to get stuff done.
              <span className="Developer__Information__Tow__p__Close__Tag">
                &lt;/p&gt;
              </span>
            </p>
            <a href="" className="Developer__Information__Tow__Contact">
              <span>Let's Talk </span>
              <BiEnvelope className="Developer__Information__Tow__Contact__Icon " />
            </a>
          </div>
          <div className="Developer__Information__Tow__Number__Info">
            <div className="Developer__Information__Tow__Number__Info__div">
              <p className="Developer__Information__Tow__Number__Info__One__Number">7</p>
              <p className="Developer__Information__Tow__Number__Info__Tow__p">
                Programme <br />
                Language
              </p>
            </div>
            <div className="Developer__Information__Tow__Number__Info__div">
              <p className="Developer__Information__Tow__Number__Info__One__Number">6</p>
              <p className="Developer__Information__Tow__Number__Info__Tow__p">
                Development <br />
                Tools
              </p>
            </div>
            <div className="Developer__Information__Tow__Number__Info__div">
              <p className="Developer__Information__Tow__Number__Info__One__Number">2</p>
              <p className="Developer__Information__Tow__Number__Info__Tow__p">
                Tears of <br />
                Experince
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
