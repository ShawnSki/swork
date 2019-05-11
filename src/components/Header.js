import React from 'react';
import './Header.css'
var imageName = require('../spouseworklogo.png')


function Header(props) {



    return (
        <div className='headerItem'>
            <div>
                <img src={imageName} alt='imageName' />
            </div>
            <div className='headerContainer'>
                <form className='myForm' id='choreForm' onSubmit={props.handleAddChore}>
                    <input className='inputChore' placeholder='Add a new item...' name='newChoreListing' onChange={props.handleUpdateInput} />
                    <input className='inputPoints' placeholder='Points' name='newChorePoints' onChange={props.handleUpdateInput} />
                    <button>POST</button>
                </form>
            </div>
        </div>
    );

}


export default Header;