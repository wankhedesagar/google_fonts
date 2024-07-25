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
            <div key={id} className="card col-md-3 mx-2 my-2 p-0" style={{width: "350px"}} >
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <p className="card-title">Category: {items.category}</p>
                <p className="card-text">family: {items.family}</p>
                <div className="d-flex justify-content-between flex-column">
                <span className="d-inline">italic:</span><a className="d-inline" href={items.files.italic}>
                  {items.files.italic === undefined ? 'not available' : items.files.italic }              
                </a>
                <span>regular:</span><a href={items.files.regular}> 
                {items.files.regular === undefined ? 'not available' : items.files.regular } 
                </a>
                <p className="my-0">Kind: {items.kind}</p>
                <p className="my-0">lastModified: {items.lastModified}</p>
                <span>Menu:</span> <a href={items.menu}>{items.menu}</a>
            
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoogleFonts;
