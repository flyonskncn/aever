import './App.css'
import Buttons from './components/Buttons';
import HeadOfGdg from './AggregateComponents/HeadOfGdg';
import Search from './components/Search';
import AboutTeam from './components/AboutTeam';
import Footer from './components/Fotter';
import TeamCard from './components/TeamCard';
import smilingface from "./assets/smiling-face-with-sunglasses.png"
import faceemoji from "./assets/face-with-tears-of-joy.png"
import celebrate from "./assets/celebrate.png"
import happyEnlarge from "./assets/happy-face-with-enlarged-eyes.png"
import { useState } from 'react';
function App() {
  const [selectDepartment,onSelectDepartment]= useState("Design Team")
  return (<>
  <img className=" absolute top-[176px] z-[-1]" src={smilingface}/>
  <img className=" absolute top-[220px] right-[0px] z-[-1]" src={faceemoji}/>
  <img className=" absolute top-[1020px] left-[87px]" src={celebrate}/>
  <img className=" absolute top-[2674px] left-[20px]" src={happyEnlarge}/>
    <div className="flex flex-col justify-center items-center gap-[60px]">
 
   <HeadOfGdg/>
   <Search/>
   <Buttons selectTeam={onSelectDepartment}/>
  <TeamCard displayTeam={selectDepartment}/>
  <Footer/>

   </div>
   </>
  )
}

export default App;
