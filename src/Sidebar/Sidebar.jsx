import './Sidebar.css'
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';

function SideBar ({rightValue , closeSide}) {



    return <div className='Sidebar' style={{right : `${rightValue}vw`}}>
  
  <div className="Sidebar__Social__Media">
    <CgClose onClick={closeSide} className='Close__Sidebar__Icon'/>
    <h1 className='Sidebar__h2'>Social Media Links</h1>
          <a href="#G" className="Sidebar__Social__Media__Link">
            <BsInstagram className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Instagram</span>
          </a>
          <a href="#G" className="Sidebar__Social__Media__Link">
            <BsDiscord className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Discord</span>
          </a>
          <a href="#G" className="Sidebar__Social__Media__Link">
            <BsGithub className="Sidebar__Social__Media__Link__Icon" />
            <span className="Sidebar__Social__Media__Link__Name">Github</span>
          </a>
        </div>

    </div>
}

export default SideBar