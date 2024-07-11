import React from 'react';
import {Link} from 'react-router-dom';
import './ColorDetail.css'

const ColorDetail = ({color}) => {
    const backgroundColor = `#${color.value}`;
    return (
        <div style={{backgroundColor}} class='ColorDetail'>
            <div>This is {color.name}</div>
            <div>Isn't it beautiful?</div>
            <div><Link to='/colors'>Go Back</Link></div>
        </div>
    )
}

export default ColorDetail;