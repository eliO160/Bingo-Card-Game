'use client'; //file should run in client side
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Popup from './components/Popup';

function Home() {
  const [done, setDone] = useState([]); //array of clicked box ids
  const [winner, setWinner] = useState(false);
  const [boxData, setBoxData] = useState([]);

  //fetch boxes from API- useeffect hook takes 2 arguements: a callback function and a dependency array
  //(tells react when to re-run the effect)
  //the function runs when the component mounts, and the dependency array controls when it runs
  //in this case, it runs once when the component mounts because the array is empty
  //the function fetches data from the backend API, converts it to JSON, and maps
  //the data to create an array of box objects with id, text, and name
  //the box objects are then stored in the boxData state variable
  //this is used to render the boxes in the Card component
  useEffect(() => {
    async function fetchBoxes() {
      await fetch('http://localhost:3001/api/boxes/seed');
      const res = await fetch('http://localhost:3001/api/boxes'); //send GET req to boxes to get boxes from backend
      const data = await res.json(); //converts response to JSON data
      
      //map data to create array of box objects with id, text, and name
      //this is used to render boxes in Card component
      const boxes = data.map((box, i) => ({
        _id: box._id, //new field to store MongoDB id
        id: i + 1,
        text: box.text,
        name: `Box ${i + 1}`
      }));
      setBoxData(boxes); //updates react state with fetched box data, triggers re-render
    }
    fetchBoxes(); //
  }, []); //empty dependency array means this effect runs once when component mounts

  //handle click function, updates state
  const handleBoxClick = (id) => {
    setDone(prev => { //prev is latest state value
      if(prev.includes(id)) { //if id is already in done array, remove it
        return prev.filter(c => c !== id); // filter out the clicked box id
      } else {
        const updated = [...prev, id]; //if id is not in done array, add it
        checkWin(updated); //check if the updated array results in a win
        return updated;  // return the updated array
      }
    }); 
  };

  const checkWin = (doneArr) => {
    const rows = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [5, 10, 15, 20, 25],
      [1, 7, 13, 19, 25],
      [5, 9, 13, 17, 21]
    ];
    for (let row of rows) {
      if (row.every(num => doneArr.includes(num))) {
        setWinner(true);
        break;
      }
    }
  };

  return (
    <main>
      <Header />
      {boxData.length === 25 ? (
        <Card
          boxes={boxData}
          done={done}
          onBoxClick={handleBoxClick}
        />
      ) : (
        <p>Loading boxes...</p>
      )}
      {winner && <Popup text="Bingo!" />} 
    </main>
  );
}

export default Home;

//