import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({dogs}) => {
    const params = useParams();
    const dog = dogs.find(({name}) => name === params.dog);
    if (!dog){
        return <Navigate to='/dogs' />
    }
    return (
        <div className='DogDetails'>
            <img src={dog.src} alt={dog.name}/>
            <div className="DogDetails-col2">
                <h2>{dog.name}</h2>
                <div>Age: {dog.age}</div>
                <ul>
                    {dog.facts.map(fact => <li>{fact}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default DogDetails;