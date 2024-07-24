import React from "react";
// import logo from './logo.svg';
import "./App.css";
import GoogleFonts from "./component/GoogleFonts";

function App() {

 const apikey = process.env.REACT_APP_GOOGLE_FONTS_API
  
  return (
    <div className="App">
      <GoogleFonts apikey={apikey} />
    </div>
  );
}

export default App;
