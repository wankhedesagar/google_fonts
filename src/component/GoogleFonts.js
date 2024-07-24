import React, { useEffect, useState } from "react";
import "./GoogleFonts.css";

function GoogleFonts(props) {
  const [googlefonts, setGoogleFonts] = useState([]);

  const apiCall = async () => {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${props.apikey}`;
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    setGoogleFonts(result.items);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
            <h1>Heading</h1>
        </div>
        {googlefonts.map((items,id) => {
          return (
            <div key={id} className="card col-md-3 mx-2 my-2"  style={{width:"450px",height:"350px"}}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-title">Category:{items.category}</p>
                <p className="card-text">family:{items.family}</p>
                <a href={items.files.italic}>
                  italic:{items.files.italic}              
                </a><br />
                <a href={items.files.regular}> regular:{items.files.regular} </a><br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoogleFonts;
