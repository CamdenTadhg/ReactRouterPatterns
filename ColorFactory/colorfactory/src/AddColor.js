import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AddColor = ({addColor}) => {
    const initialState = {
        name: '',
        value: '000000'
    };
    const [formData, setFormData] = useState({initialState});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, value} = formData;
        const strippedValue = value.slice(1);
        addColor(name, strippedValue);
        setFormData(initialState);
        navigate('/colors');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' value={formData.name} name='name' onChange={handleChange}/>
                <input type='color' name='value' value={formData.value} onChange={handleChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddColor;