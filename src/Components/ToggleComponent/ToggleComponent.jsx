import React, { useState } from 'react';
import './ToggleComponent.css';
import profile from '../../assets/images/eye.png'


const ToggleComponent = () => {
    const [visible,setVisible]=useState(false)
    
    const ShowDetailsHandler=()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
        
    }
  return (
    <main>
        <div className='container'>
        <img src={profile} alt="profile" style={{ height: '100px' }}/>
        <h1>Name: Ritik Samuel</h1>
        <h3>Reg No: 212221040138</h3>
        <button onClick={ShowDetailsHandler}>Show Details</button>
        {visible && <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci recusandae quod vitae ut sed laudantium sequi ratione, voluptate, maiores sit quos illum a quia, corrupti minus molestias rerum. Ducimus?</h3>}
        </div>
    </main>
  )
}

export default ToggleComponent