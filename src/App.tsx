import React from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer";
import Header from "./components/ui/Header/Header";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow style={{}}>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontFirstGrow>
          <MemeSVGViewer></MemeSVGViewer>
          <MemeForm data={""}></MemeForm>
        </FlexHorizontFirstGrow>
        <Footer></Footer>
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
