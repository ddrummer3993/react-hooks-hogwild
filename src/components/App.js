import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";

import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [greaseState, setGreaseState] = useState(null);


  function handleClick(status) {
    setGreaseState(status);
    console.log(status);
  };

  function handleSort(event) {
    if(event.target.value === "Name") {
      setHogList([...hogList.sort((a,b) => {
        if(a.name < b.name) {
          return -1;
        } else if(a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      })])
    } else if(event.target.value === "Weight") {
      setHogList([...hogList.sort((a,b) => a.weight - b.weight)]);
    }
  }

  console.log(hogList);

  const hogsToDisplay = hogList.filter(hog => {
    if(greaseState === null) {
      return true;
    } else {
      return hog.greased === greaseState;
    }
  })

	return (
		<div className="App">
			<Nav />
      <HogFilter onButtonClick={handleClick} />
      <HogSort onSortSelect={handleSort}/>
      <HogTile hogData={hogsToDisplay}/>
		</div>
	);
}

export default App;