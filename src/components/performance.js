import React from 'react'
import './performance.css'
// import searchicon from '../images/searchicon.png'
import mainimage from '../images/mainimage.png'
import leftarrow from '../images/leftarrow.jpg'
import rightarrrow from '../images/rightarrow.jpg'
// import SewrchIcon from "@material-ul"
const Performance = () => {
    return (
        <div>
            <div className='head'>
                <h1>Performance</h1>
            </div>
            <section id='mains'>
                <div className='date-area'>
                    <input className='mains-input' type='text' placeholder='Search by Employee name or ID' ></input>
                    {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                </div>
                <div className='date-area'>
                    <p>Week Ending</p>
                    <img className='arrow' src={leftarrow} alt="/"></img>
                    <input className='date-area-input' type='text' placeholder='January 12, 2024'></input>
                    <img className='arrow' src={rightarrrow} alt="/"></img>
                </div>
            </section>
            <div className='image-area'>
                <img src={mainimage} alt="/"></img>
                <p>Easily track and rate your team's progress now</p>
            </div>
        </div >
    )
}

export default Performance;
