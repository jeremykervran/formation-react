import React from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Header from "./components/ui/Header/Header";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import { useState } from 'react'

const App = () => {
  const [meme, setMeme] = useState(emptyMeme)
  return (
    <>
    <div>{JSON.stringify(meme)}</div>
    <div className="App">
      <FlexVerticalThirdGrow style={{}}>
        <Header/>
        <Navbar/>
        <FlexHorizontFirstGrow>
          <MemeSVGViewer meme={meme} image={undefined}/>
          <MemeForm meme={meme} onMemeChange={(m) => {setMeme(m)}}/>
        </FlexHorizontFirstGrow>
        <Footer/>
      </FlexVerticalThirdGrow>
    </div>
    </>
  );
};

export default App;
