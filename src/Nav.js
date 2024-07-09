import React from 'react';
import {v4 as uuid} from 'uuid';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = ({dogs}) => {
    return (
        <div className='navigation'>
            {dogs.map(dog => <div key={uuid()}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></div>)}
        </div>
    );
}

export default Nav;