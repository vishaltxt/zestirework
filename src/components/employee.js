import React from 'react'
import './employee.css'
import tickIcon from '../images/tickicon.png'

const Employee = () => {
    return (
        <div className='container'>
            <ol type='1'>
                <li className='first-li'>Aarav Deshmukh (IND123ABC) <img className='tickIcon' src={tickIcon} alt=""></img></li>
                <li>Priya Sharma (IND456XYZ)</li>
                <li>Rohan Kapoor (IND789LMN)</li>
                <li>Ananya Patel (IND234PQR)</li>
                <li>Arjun Singh (IND567JKL)</li>
                <li>Naina Gupta (IND890DEF)</li>
                <li>Rajiv Verma (IND321GHI)</li>
                <li>Sneha Reddy (IND654UVW)</li>
                <li>Sameer Kumar (IND876RST)</li>
                <li>Pooja Mehta (IND543CDE)</li>
            </ol>
        </div>
    )
}

export default Employee;
