import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");
  const [isAcending, setIsacending] = useState(true);

  const titleChangeHandler = useCallback(() => {
    setListTitle("My Title");
  }, []);

  const setListOrder = useCallback(() => {
    setIsacending((prev) => !prev);
  }, []);

  const listItem = useMemo(() => [5, 4, 3, 2, 1, 6, 7], [])

  return (
    <div className="app">
      <DemoList title={listTitle} order={isAcending} items={listItem} />
      <Button onClick={titleChangeHandler}>Change List Title</Button>
      <Button onClick={setListOrder}>
        {isAcending
          ? "change to descending order"
          : "Change to Ascending Order"}
      </Button>
    </div>
  );
};

export default App;








// import React, { useState, useCallback, useMemo } from 'react';

// import './App.css';
// import DemoList from './components/Demo/DemoList';
// import Button from './components/UI/Button.js';

// function App() {
//   const [dynamicTitle,setDynamicTitle]=useState(false)

//   const dynamicTitleHandler =() => {
//     console.log('change to true')
//     setDynamicTitle((prevDynamicTitle) =>!prevDynamicTitle); 
//   }


//   const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

//   return (
//     <div className="app">
//       <DemoList show={dynamicTitle} items={listItems} />
//       <Button onClick={dynamicTitleHandler}>Asending</Button>
//       {/* <Button onClick={changeTitleHandler}>Desending</Button> */}
//     </div>
//   );
// }

// export default App;
