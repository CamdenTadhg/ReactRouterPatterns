import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import ColorDetail from './ColorDetail';

const ColorSelector = ({colors}) => {
    const params = useParams();
    const color = colors.find(({value}) => value === params.color);

    if (!color){
        return <Navigate to='/colors'/>
    }

    return (
        <ColorDetail color={color} />
    )

}

export default ColorSelector;