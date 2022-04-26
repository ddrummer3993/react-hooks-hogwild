import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({ hogData }) {
  console.log(hogData);

  const [displayDetails, setDisplayDetails] = useState(false);

  function handleClick() {
    setDisplayDetails(!displayDetails);
  }

  return(
    <div className="ui grid container">
      {hogData.map(hog => (
        <div key={hog.name} className="pigTile" onClick={handleClick}>
          <h2 >{hog.name}</h2>
          <img src={hog.image} alt="A pig."></img>
          {displayDetails ? <HogDetails singleHogData={hog}/> : null}
        </div>
      ))}
    </div>
  )
};

export default HogTile;