
import React from 'react'
import './entry_style.css';
import { FaArrowDown } from 'react-icons/fa';
import NavLink from './Nav';
import Nav from './Nav';


function Entry() {
  return (
    <center>
      

      <div id='center_content'>
        <p id='intro_name'> I'm SILPA  BABU</p>
        <p id='intro_desi'>Full Stack Developer</p>
        <p id='see_more'>see more
               <FaArrowDown/>
        </p>
      </div>
    </center>
  )
}

export default Entry
