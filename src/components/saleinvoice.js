import React from 'react'
import './saleinvoice.css'
import img from '../images/Create.png'
const Saleinvoice = () => {
    return (
        <div>
            <hr className='horizontal-line'></hr>
            <section id='saleinvoice'>
                <div className='saleinvoice-first'>

                </div>
                <div className='saleinvoice-container'>
                    <div id='one' className='saleinvoice-grid'>
                        <p className='grid-one'>Invoice no</p>
                        <p>1</p>
                        <p></p>
                        <p>Invoice Date</p>
                        <p>4 th MAY, 2023</p>
                        <p>Add</p>
                        <p>Due Date</p>
                        <p>4 th May, 2023</p>
                        <p>Edit</p>
                    </div>
                    <div id='two' className='saleinvoice-grid'>
                        <p className=''>Your GSTIN</p>
                        <input></input>
                        <p>State of Supply</p>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div id='three' className='saleinvoice-grid'>
                        <div>
                            <p>Customer/</p>
                            <p>Business name</p>
                        </div>
                        <div>
                        </div>
                        <select>
                            <option>Arjun Srivastav <button className='saleinvoice-button'>View info</button></option>
                        </select>
                    </div>
                    <div id='four' className='saleinvoice-grid'>
                        <h4>Items</h4>
                        <div className='fouth-container'>
                            <div className='fourth'>
                                <p>Item code/Name</p>
                                <select></select>
                            </div>
                            <div className='fourth'>
                                <p>Unit Price</p>
                                <input></input>
                            </div>
                            <div className='fourth'>
                                <p>Quantity</p>
                                <input></input>
                            </div>
                            <div className='fourth'>
                                <p>GST</p>
                                <select>
                                    <option>5%</option>
                                </select>
                            </div>
                            <div className='fourth'>
                                <p>Total Amount</p>
                                <input></input>
                            </div>
                        </div>
                        <p>ADD MORE ITEMS+</p>
                    </div>
                    <div id='five' className='saleinvoice-grid'>
                        <p className='fivepara'>Add Discount</p>
                        <hr className='division'></hr>
                        <p className='fivepara'>Add Extra Charge</p>
                        <hr className='division'></hr>
                        <div className='fifth-container'>
                            <div className='fifth'>
                                <label className="radio-label">
                                    <input type="radio" name="paymentStatus" className="radio-input" value="paid" checked />
                                    <span className="radio-text">PAID</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="paymentStatus" className="radio-input" value="unpaid" />
                                    <span className="radio-text">UNPAID</span>
                                </label>
                            </div>
                            <div className='fifth'>
                                <p>Payment type</p>
                            </div>
                            <div className='fifth'>
                                <p>Cash</p>
                            </div>
                            <div className='fifth'>
                                <select>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <hr className='division'></hr>
                        <div className='fifth-container'>
                            <h5 className='h5'>Terms and Conditions</h5>
                            <img className='img' src={img} alt=''></img>
                        </div>
                        <div className='termsandconditions'>
                            <ol type='1'>
                                <li>ITEMS once sold will not be taken back or Exchanged</li>
                                <li>A late fee of 10% of due amount will be added for delayed payments.</li>
                            </ol>
                        </div>
                    </div>
                    <div id='six' className='saleinvoice-grid'>
                        <div className='sixth'>
                            <p>Price Break up</p>
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked />
                                <span class="checkbox-text">Send SMS To Party</span>
                            </label>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p>Sale Price</p>
                            </div>
                            <div>
                                <p>₹ 499</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p>Discount(20%)</p>
                            </div>
                            <div>
                                <p>₹ 99.00</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p>IGST @ 5%</p>
                            </div>
                            <div>
                                <p>₹19.96</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p>Total Selling Price</p>
                            </div>
                            <div>
                                <p>₹ 419.16</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <button className='last-button'>Create Invoice</button>
        </div>
    )
}

export default Saleinvoice;
