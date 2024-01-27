import React from 'react'
import './invoice.css'
import ellipse from '../images/Ellipse 5.png'
import invoice from '../images/invoice.png'
const Invoice = () => {
    return (
        <div>
            <section className='invoice-container'>
                <div className='invoice-first-section'>

                </div>
                <div className='invoice-second-section'>
                    <hr className='hr-line'></hr>
                    <img className='ellipse' src={ellipse} alt="/"></img>
                    <img className='invoice' src={invoice} alt="/"></img>
                    <p className='invoice-first-para'>Hello! Create your first invoice</p>
                    <p className='invoice-second-para'>Click on the create invoice button below</p>
                    <button className='invoice-button'>Create Invoice+</button>
                </div>
            </section>
        </div>
    )
}

export default Invoice;
