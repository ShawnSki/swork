import React from 'react';
import './Header.css'


function Header(props) {
 
        return (
            <div className='headerItem'>
            <div>logo</div>
                <div>
                <form onSubmit={props.handleAddChore}>
                <input className='inputChore' placeholder='Add a new item...' name='newChoreListing' onChange={props.handleUpdateInput} />
                <input className='inputPoints' placeholder='Points' name='newChorePoints' onChange={props.handleUpdateInput} />
                <button>send</button>
                </form>
                </div>
            </div>
        );
    
}

export default Header;