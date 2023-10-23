import React from 'react'
import "./CTA.css"
import logo from "../assests/AZ-logo.png"
import Z from "../assests/z.png"
function CTA() {
  return (

    <div className="CTAwrapper">
      <div className="CTAheader">
        <div className="CTAheadertextwrapper">
          <div className="CTApremium">
          Premium Victory Batch
          </div>
          <div className="CTA19">
         ₹19,999
    
          </div>
          <div className="CTA13">
          ₹13,999
          </div>
        </div>
        <div className="CTAlogo">
          <div className="svg-img">
<svg xmlns="http://www.w3.org/2000/svg" width="207" height="179" viewBox="0 0 307 279" fill="none">
<path d="M98.729 312.997H22.1532C15.8558 312.997 9.8163 310.496 5.36336 306.043C0.910409 301.59 -1.59123 295.55 -1.59123 289.253C-1.61996 285.094 -0.555508 281 1.49555 277.381L160.821 -6.60274C161.845 -8.43617 163.124 -10.115 164.62 -11.5891C166.105 -13.1236 167.829 -14.4067 169.725 -15.3882C173.335 -17.4722 177.429 -18.5693 181.597 -18.5693C185.765 -18.5693 189.86 -17.4722 193.469 -15.3882C195.309 -14.3738 196.989 -13.0937 198.456 -11.5891C200.096 -10.0226 201.497 -8.22231 202.611 -6.24657L361.818 277.381C363.916 281.015 365.014 285.14 365 289.337C364.986 293.533 363.859 297.651 361.736 301.27C359.612 304.89 356.567 307.882 352.911 309.942C349.255 312.002 345.118 313.056 340.922 312.997H264.584C256.64 297.905 244.668 285.311 229.997 276.613C215.326 267.915 198.531 263.455 181.478 263.728C164.423 263.441 147.622 267.896 132.949 276.595C118.276 285.294 106.306 297.896 98.3729 312.997H98.729Z" fill="url(#paint0_linear_1_111)"/>
<defs>
<linearGradient id="paint0_linear_1_111" x1="181.704" y1="-18.5693" x2="181.704" y2="415.169" gradientUnits="userSpaceOnUse">
<stop stop-color="#0B749F"/>
<stop offset="1" stop-color="#05445E"/>
</linearGradient>
</defs>
</svg>
</div>
<img src={Z} className="Z"  />
</div>
      </div>
     
      <div className="CTAbox">
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">100+ Hrs Live Content</div>
      </div>
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">50+ Hrs Contest</div>
      </div>
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">500+ Problems</div>
      </div>
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">Includes an interview bootcamp and <p>access to a mentor network</p></div>
      </div>
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">Enjoy access to our content for one year<p>(paid extensions available)</p></div>
      </div>
      <div className="CTAtextwrapper">
      <div className="CTApoint">
      </div>
      <div className="CTAtext">Flexible payment options, including no-<p>cost EMI, are available</p></div>
      </div>
    <button className="CTAbutton">Join Now </button>
      </div>
    </div>
  
  )
}

export default CTA
