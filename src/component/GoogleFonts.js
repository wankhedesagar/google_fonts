import React, { useEffect, useState } from "react";

function GoogleFonts(props) {
const [googlefonts,setGoogleFonts] = useState([])

  const apiCall = async () => {
    const url = (`https://www.googleapis.com/webfonts/v1/webfonts?key=${props.apikey}`);
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    setGoogleFonts(result.items)
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="container">
        <h1>Google Fonts</h1>
        {googlefonts.map((items) => {
           return(
            <div>
                 <p>{items.category}</p>
            </div>
           )
        })}
    </div>
  );
}

export default GoogleFonts;
