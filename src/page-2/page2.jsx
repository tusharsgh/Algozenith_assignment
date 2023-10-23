import React from 'react'
import "./page2.css"
import CTA from "./CTA";
import Cross from "../assests/cross.png"
function page2text() {
  return (
    <div className="page2backgroundwrapper">
    <div className="page2container">
      <div className="pag2textwrapper">
        <div className="page2headerwrapper">
        <div className="page2header">
        Invest in skills,<p className="spacing"><i className="earn">earn 10X</i>  of what you paid.</p>
        </div>
     
      <div className="page2text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      </div>
      <div className="pointswrapper">
        <div className="rowwrapper">
          <div className="points">
          <div className="bullets"></div>
          <div className="pointtext">
         <p className="pointshighlights"> 1.2 Cr/Year</p > highest fresher package
          </div>
          </div>
          <div className="points">
          <div className="bullets"></div>
          <div className="pointtext">
         <p className="pointshighlights"> Multiple {"<"}100 Ranks</p> in kickstart last year
          </div>
          </div>
        </div>
        <div className="rowwrapper">
          <div className="points">
          <div className="bullets"></div>
          <div className="pointtext">
         <p className="pointshighlights"> 1000+ Offers</p> from top companies
          </div>
          </div>
          <div className="points">
          <div className="bullets"></div>
          <div className="pointtext">
         <p className="pointshighlights"> Trusted by IITians</p>for their career prep
          </div>
          </div>
        </div>
      </div>
      </div>
<div className="CTAbackground" >
  
<div className="position" >
  
  <CTA/>
</div>
<img src={Cross} className="CTAcross"/>
</div>
</div>
<div className="page2svg">
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1000" viewBox="0 0 100% 1195" fill="none">
<path d="M1920 0C1515 719 540 830 0 830V1195H1920V0Z" fill="url(#paint0_linear_1_75)"/>
<defs>
<linearGradient id="paint0_linear_1_75" x1="960" y1="0" x2="960" y2="1195" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7FAFF"/>
<stop offset="1" stop-color="#E8F0FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>
    </div>
  )
}

export default page2text;