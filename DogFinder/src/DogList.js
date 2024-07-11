import React from 'react';
import './DogList.css';
import {Link} from 'react-router-dom';

const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            {dogs.map(dog => 
                <div className="DogList-dog">
                    <Link to={`/dogs/${dog.name}`}><img className="DogList-img" src={dog.src} alt={dog.name}/></Link>
                    <p><b>{dog.name}</b></p>
                    <p>Age: {dog.age}</p>
                    <ul className="DogList-facts">
                        {dog.facts.map(fact => <li>{fact}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DogList;