import './App.css'
import Buttons from './components/Buttons';
import HeadOfGdg from './AggregateComponents/HeadOfGdg';
import Search from './components/Search';
import Footer from './components/Fotter';
import TeamCard from './components/TeamCard';
import smilingface from "./assets/smiling-face-with-sunglasses.png"
import faceemoji from "./assets/face-with-tears-of-joy.png"
import celebrate from "./assets/celebrate.png"
import happyEnlarge from "./assets/happy-face-with-enlarged-eyes.png"
import { useState } from 'react';
import Page from './pages/Page'
function App() {
  const [selectDepartment,onSelectDepartment]= useState("Design Team")
  return (<>
 <Page/>
   </>
  )
}

export default App;
