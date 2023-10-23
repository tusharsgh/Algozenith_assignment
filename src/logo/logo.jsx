import React from 'react'
import "./logo.css"
import Search from "../assests/search.png"; 
import Branch from "../assests/Branch.png";
import Pointer from "../assests/pointer.png";
import TimeComplexity from "../assests/TimeComplexity.png"
import Tree from "../assests/Tree.png";
import DP from "../assests/DP.png";
import BT from "../assests/BT.png";
import Cross from "../assests/cross.png";

import AZ from "../assests/AZ-logo.png"
function Logo() {
  return (
    <div className="display-wrapper">
     <div className="logo-grid">
    <div className='logo-wrapper'>
    <div className="logo-outer-wrapper"> 
 
     <div className="logo-inner-wrapper">  
     <img src={AZ} className="logo" ></img>
     
     </div>
    </div>
    <div className="line-wrapper">
    <div className="line-hor-wrapper">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    </div>
    <div className="line-ver-wrapper">
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
      <div className="line-ver"></div>
    </div>
    </div>
    </div>
        <div className="button-wrapper">
        <div className="button-flex-wrapper">
       <div className="two-wrapper-1">
      <div className="tab-wrapper">
        <img src={Search} className="search"></img>
        <div className="logo-text">Binary Search</div>
      </div>
      <div className="tab-wrapper_leftmost">
        <img src={Branch} className="search"></img>
        <div className="logo-text">Branch & Bound</div>
      </div>
      </div>
      <div className="two-wrapper-2">
      <div className="tab-wrapper">
        <img src={BT} className="search_2"></img>
        <div className="logo-text">Backtracking</div>
      </div>
      <div className="tab-wrapper">
        {/* <img src={Branch} className="search"></img> */}
        <div className="logo-text"></div>
      </div>
      </div>
      <div className="two-wrapper-3">
      <div className="tab-wrapper">
        <img src={DP} className="search"></img>
        <div className="logo-text">Dynamic Programing</div>
      </div>
      <div className="tab-wrapper">
        <img src={Pointer} className="search"></img>
        <div className="logo-text">Two Pointers</div>
      </div>
      </div>
      <div className="two-wrapper-4">
      <div className="tab-wrapper">
        <img src={DP} className="search_bottom"></img>
        <div className="logo-text_bottom">Graphs</div>
      </div>
      <div className="tab-wrapper">
        <img src={TimeComplexity} className="search"></img>
        <div className="logo-text">Time Complexity</div>
      </div>
      </div>
      </div>
        {/* <img src={Cross} className="Cross-img"></img>  */}
        
      </div>

     
      </div>
   <img src={Cross} className="Cross-img"></img>
    </div>
  )
}

export default Logo
