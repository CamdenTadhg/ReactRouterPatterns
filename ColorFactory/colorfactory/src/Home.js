import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

const Home = ({colors}) => {
    return (
        <div className="Home">
            <div className='Home-buttondiv'><Link to='/addcolor'><button>Add a color</button></Link></div>
            <b>Select a color:</b>
            {colors.map((color) => <div key={color.value}><Link to={`/colors/${color.value}`}>{color.name}</Link></div>)}
            
        </div>
    )
}

export default Home;