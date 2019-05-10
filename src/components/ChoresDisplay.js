import React, { Component } from 'react';

import './ChoresDisplay.css'



class ChoresDisplay extends Component {


    render() {
        // This is mapping over the chores list and displaying each item
        // console.log(this.props.editSwitch)
        const choresMapped = this.props.choreList.map((choreObj, i) => {
            return <div className='choreItem' key={i}>
                <div className='btnBox'>
                    <button name={choreObj.points} onClick={this.props.handleCompleteChore}>chk</button>
                </div>
                <h2>{choreObj.listing}</h2>
                <form id='chorePointsForm' name={choreObj.id} onSubmit={this.props.handleUpdateChorePoints}>
                <input placeholder={choreObj.notes} name='updatedChorePoints' onChange={this.props.handleUpdateInput} />
                <button>Submit</button>
                </form>
                <span className='points'>{choreObj.points}</span>
                <button name={choreObj.id} onClick={this.props.handleDeleteChore}>delete {choreObj.id}</button>
                {/* <button onClick={this.props.updateEditSwitch}>edit</button> */}
            </div>
        })
        // const choresMappedEdit = this.props.choreList.map((choreObj, i) => {
        //     return <div className='choreItem' key={i}>
        //         <div className='btnBox'>
        //             <button name={choreObj.points} onClick={this.props.handleCompleteChore}>chk</button>
        //         </div>
        //         <h2>{choreObj.listing}</h2>
        //         <form id='chorePointsForm' name={choreObj.id} onSubmit={this.props.handleUpdateChorePoints}>
        //         <input placeholder={choreObj.points} name='updatedChorePoints' onChange={this.props.handleUpdateInput} />
        //         <button>Submit</button>
        //         </form>
        //     </div> 
        // })
        
        return (
            <div>
                {choresMapped.reverse()}
                {/* {this.props.editSwitch === false
                ?<div>{choresMapped.reverse()}</div>
                :<div>{choresMappedEdit.reverse()}</div>
                } */}
            </div>
        )
    }
}

export default ChoresDisplay;