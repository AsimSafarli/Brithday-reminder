import React from "react";
import { useState } from "react";
import data from "./data"
import List  from "./List"
function App() {
  const [people,setPeople] =useState(data)
  return (
    <div className="container">
      <h3>{people.length} brithday today</h3>
    <List people={people}/>
    <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
