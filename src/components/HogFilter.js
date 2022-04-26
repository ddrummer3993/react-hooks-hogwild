import React from "react";

const HogFilter = ({ onButtonClick }) => {
  
  function click(event) {
    if(event.target.value === "greased") {
      onButtonClick(true)
    } else {
      onButtonClick(false)
    };
  };

  return(
    <div>
      <h4>Filter by:</h4>
      <button value="greased" onClick={click}>Greased</button>
      <button value="notGreased" onClick={click}>Not Greased</button>
    </div>
  )
};



/*const ToggleButton = ({status, buttonText, onClick}) => {

  // Delegate / callback function
  // Calls onClick function provided as props
  // Tracks status and onClick
  const handleOnClick = React.useCallback(() => {
    onClick(status);
  }, [status, onClick]);

  return <button onClick={handleOnClick}>{buttonText}</button>
};*/


export default HogFilter;