import logo from './logo.svg';
import './App.css';
import  Text from './Text/text.jsx';
import Logo from './logo/logo.jsx';
import Page2 from './page-2/page2';
function App() {
  return (
    <div className="main-display">
<div className="page-1-contianer">
<div className="ellipse"></div>
   <div className="main-wrapper" >
   


     <div className="flex flex-col items-start gap-[25px] z-10 shrink  ">
     
 <div className="flex flex-col gap-[2px] justify-evenly max-w-2xl ">
    
    <div className="text-white  text-[60px] font-extrabold leading-72 flex-1 ">Be better at DSA & CP</div>
    <div className="text-white font-dm-sans text-[20px] font-normal  tracking-tight  ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
     
      </div>
      <div className="btn-wrapper">
        <button className="text-[#05445E] bg-gradient-to-r  from-[#FFF] to-[#DFF6FF] to-[144%] px-[60px] py-[8px] rounded-[8px] text-[22px]"> Join Now</button>
        <button className="text-[#FFF] bg-gradient-to-r  from-[#033042] from-[-0.03%] to-[#005C83] to-[99.9%] px-[30px] py-[9px] rounded-[8px] text-[22px]">View curriculum</button>
      </div>
      
    
      <Text/>
      <div className="btn-wrapper_sm">
        <button className="text-[#05445E] bg-gradient-to-r  from-[#FFF] to-[#DFF6FF] to-[144%] px-[60px] py-[8px] rounded-[8px] text-[22px] flex-1"> Join Now</button>
       <button className="text-[#FFF] bg-gradient-to-r  from-[#033042] from-[-0.03%] to-[#005C83] to-[99.9%] px-[30px] py-[9px] rounded-[8px] text-[22px]">View curriculum</button>
       </div>
     
    </div>
<Logo/>

    </div>
    <div className="ellipse_2"></div>
    </div>
<Page2/>

    </div>
 
  );
}

export default App;
