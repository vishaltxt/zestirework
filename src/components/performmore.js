import React from 'react'
import './performmore.css'
import tickIcon from '../images/tickicon.png'
import leftarrow from '../images/leftarrow.jpg'
import rightarrrow from '../images/rightarrow.jpg'
import SearchIcon from '@mui/icons-material/Search'
const Performmore = () => {
    return (
        <div>
            <div className='head'>
                <h1>Performance</h1>
            </div>
            <section id='mains'>
                <div className='date-area'>
                    <input className='mains-input' type='text' placeholder='Aarav Deshmukh (IND123ABC)' />
                    <div className='searchIcon'><SearchIcon /></div>
                </div>
                <div className='date-area'>
                    <p>Week Ending</p>
                    <img className='arrow' src={leftarrow} alt="/"></img>
                    <input className='date-area-input' type='text' placeholder='January 12, 2024'></input>
                    <img className='arrow' src={rightarrrow} alt="/"></img>
                    <div> <img className='checkIcon' src={tickIcon} alt=""></img></div>
                </div>
            </section>
            <div className='grid-container'>
                <div className="box bg centre">Date</div>
                <div className="box bg centre">Task Decriptions</div>
                <div className="box centre">January 8, 2024</div>
                <div className="box">Completed the wireframes for the upcoming homepage redesign.......<span>View</span></div>
                <div className="box centre">January 9, 2024</div>
                <div className="box">Completed the wireframes for the upcoming homepage redesign.......<span>View</span></div>
                <div className="box centre">January 10, 2024</div>
                <div className="box">Completed the wireframes for the upcoming homepage redesign.......<span>View</span></div>
                <div className="box centre">January 11, 2024</div>
                <div className="box">Completed the wireframes for the upcoming homepage redesign.......<span>View</span></div>
                <div className="box centre">January 12, 2024</div>
                <div className="box">Completed the wireframes for the upcoming homepage redesign.......<span>View</span></div>
            </div>
            <button className='btn'>Rate Now</button>
        </div>
    )
}
export default Performmore;
