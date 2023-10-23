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
   


     <div className="page1headerwrapper">
     
 <div className="page1textwrapper">
    
    <div className="page1header">Be better at DSA & CP</div>
    <div className="page1text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
     
      </div>
      <div className="btn-wrapper">
        <button className="page1btn"> Join Now</button>
        <button className="page1btn2">View curriculum</button>
      </div>
      
    
      <Text/>
      <div className="btn-wrapper_sm">
        <button className="page1btn"> Join Now</button>
       <button className="page1btn2">View curriculum</button>
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
