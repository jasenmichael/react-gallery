import { Component, useContext, useState } from 'react';
import '../index.css';
import '../App.css'
import ImageContext from '../context/imageContext';
const testImage = 'https://images.unsplash.com/photo-1561655544-84c345cf6308?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80'

const Header = (props) => {
    const [image, setPic ] = useState('');
    const { setImage } = useContext(ImageContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setImage((preState => [...preState, image]));
        setPic('')
    }
    return(
        <div className="flex h-96 header justify-center items-center">
    
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={image}
            onChange={e => setPic(e.target.value)}
            className="w-96 h-12 bg-white rounded-lg p-2" 
            placeholder="Add Picture" 
            />
             <input className="button" type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Header;