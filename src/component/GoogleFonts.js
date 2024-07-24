import React, { useEffect } from "react";

function GoogleFonts(props) {
  const apiCall = async () => {
    const url = (`https://www.googleapis.com/webfonts/v1/webfonts?key=${props.apikey}`);
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default GoogleFonts;
