import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [array, setArray] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [swapped, setSwapped] = useState([]);
  const [run, setRun] = useState(0);

  // Generate a new array of random integers on page load and when the user clicks the "New Array" button
  useEffect(() => {
    generateArray();
  }, []);

  useEffect(() => {
    console.log(comparing);
  }, [comparing]);

  // Sort the array using bubble sort algorithm
  const bubbleSort = async () => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {

        // Add a class to the elements being compared
        setRun(previos => previos+1)
        setComparing([j, j+1]);

        // If the current element is greater than the next element, swap them
        if (array[j] > array[j + 1]) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setSwapped([j, j+1])
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
          
          await new Promise((resolve) => setTimeout(resolve, 500));
          setArray([...array]); // Update the state of the array

          // Wait for 100ms
          await new Promise((resolve) => setTimeout(resolve, 900));
  
          // Remove the class
          setComparing([]);
          setSwapped([])
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }
      }
    }
    setComparing([]);
  };
  const bubbleSortMine = async () => {
    let len = array.length;
    for (let i = 0; i < len-1; i++) {
      for (let j = i; j < len; j++) {

        // Add a class to the elements being compared
        setComparing([i, j]);
        setRun(previos => previos+1)

        // If the current element is greater than the next element, swap them
        if (array[i] > array[j]) {
          setSwapped([i, j])
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
  
          await new Promise((resolve) => setTimeout(resolve, 950));
          setArray([...array]); // Update the state of the array
  
          // Wait for 100ms
          await new Promise((resolve) => setTimeout(resolve, 800));
  
  
          // Remove the class
          setComparing([]);
          setSwapped([]);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }
    setComparing([]);
  };
  const insertionSort = async () => {
    let len = array.length;
    for (let i=1; i<=len; i++) {
      let j = i;
      while ((array[j-1] > array[j]) && j>0) {
        setComparing([j])
        setRun(prev => prev+1)
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;

        await new Promise((resolve) => setTimeout(resolve, 400));
  
        setArray([...array]); // Update the state of the array
      }
      setComparing([j])
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }

  // Generate a new array of random integers and set it as the state of the array
  const generateArray = () => {
    let newArray = [];
    let bars = window.innerWidth > 600 ? 35 : window.innerWidth > 400 ? 20 : 10
    console.log(bars)
    for (let i = 0; i < bars; i++) {
      newArray.push(getRandomInt(5, 500));
    }
    setArray(newArray);
    setRun(0);
  };

  // Helper function to generate a random integer between min and max (inclusive)
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  // Map through the array and create divs with inline styles to display the elements on the DOM
  const renderArray = () => {
    return array.map((element, index) => {
      let className = "array-element";
      if (comparing.includes(index)) {
        className += " comparing";
      }
      return (
        <div
          key={index}
          className={`${className} mt-auto ${swapped.includes(index) ? 'bg-blue-700' : comparing.includes(index) ? 'bg-black text-white' : 'bg-pink-500'} ${window.innerWidth>600 ? 'w-10' : 'w-3'}`}
          style={{ height: `${element}px` }}
        >{window.innerWidth>800 && element}
        </div>
      );
    });
  };

  return (
    <div className="app">
      <div className="w-full flex gap-[1px] h-full justify-center">{renderArray()}</div>
      <div className="buttons">
        <button onClick={() => generateArray()} className='border border-blue-600 text-blue-600 px-3 py-1 mx-2 mt-2 rounded-md'>New Array</button>
        <button onClick={() => bubbleSortMine()} className='border border-blue-600 text-blue-600 px-3 py-1 mx-2 mt-2 rounded-md'>Bubble Sort Mine</button>
        <button onClick={() => bubbleSort()} className='border border-blue-600 text-blue-600 px-3 py-1 mx-2 mt-2 rounded-md'>Bubble Sort</button>
        <button onClick={() => insertionSort()} className='border border-blue-600 text-blue-600 px-3 py-1 mx-2 mt-2 rounded-md'>Insertion Sort</button>
      </div>
      <div className="text-3xl py-4 font-semibold">{run} comparisons</div>
    </div>
  );
}
