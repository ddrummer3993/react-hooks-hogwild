import React from "react";

function HogDetails({ singleHogData }) {
  console.log(singleHogData);

  return(
    <>
      <p>Specialty: {singleHogData.specialty}</p>
      <p>Weight: {singleHogData.weight}</p>
      <p>Greased: {singleHogData.greased ? "YES" : "NO"}</p>
      <p>Highest Medal Acheived: {singleHogData["highest medal achieved"]}</p>
    </>
  )
};

export default HogDetails;