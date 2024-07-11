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

//create React Router Color Factory
  // /colors shows a list of all available colors
  // clicking a color shows a page of that color in all its glory (colors/:color)
  //clicking a button will show a form to add a new color (input type color)
  //when form is submitted, redirects to color index with new color on top
  //when navigating to a color page that does not exist, redirect to colors index page
  //when navigating to an invalid url, redirect to colors index page

  //is there a way to get the current dog before you render the component, passing dog instead of the entire list of dog data
  //write tests
  //presist colors data in localStorage (useEffect)
  //style apps
  //build React Router Calculator
    //supports routes like /add/1/2 renders a component that displays 3
    //try to do this without using a different component for each math operation. 
