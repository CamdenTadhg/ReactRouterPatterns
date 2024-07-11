import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';

function App({dogs}) {
  return (
    <>
    <BrowserRouter>
      <Nav dogs={dogs}/>
      <Routes>
          <Route exact path='/dogs' element={<DogList dogs={dogs}/>}/>
          <Route exact path='/dogs/:dog' element={<DogDetails dogs={dogs}/>}/>
          <Route path='*' element={<Navigate to='/dogs' />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;


  //is there a way to get the current dog before you render the component, passing dog instead of the entire list of dog data to DogDetails
  //write tests
  //persist colors data in localStorage (useEffect)
  //style apps
  //build React Router Calculator
    //supports routes like /add/1/2 renders a component that displays 3
    //try to do this without using a different component for each math operation. 
    //write tests