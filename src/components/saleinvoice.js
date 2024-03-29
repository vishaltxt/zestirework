import React, { useState } from 'react'
// import Modal from 'react-modal'
import './saleinvoice.css'
import img from '../images/Create.png'
import MyModal from './saleinvoicemodal';
import MySecondModal from './addextracharge';
import PaymentType from './paymenttype';
import Sendsms from './sendsms';
import Customer from './customer';
import Product from './product';

const Saleinvoice = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const [extra, setExtra] = useState(false);
    const close = () => setExtra(false);

    const [payment, setPayment] = useState(false);
    const closepayment = () => setPayment(false);

    const [sms, setSMS] = useState(false);
    const closesms = () => setSMS(false);

    const [customer, setCustomer] = useState(false);
    const closecustomer = () => setCustomer(false);

    const [product, setProduct] = useState(false);
    const closeProduct = () => setProduct(false);
    return (
        <div id='saleinvoice-bg'>
            <p className='top-heading'>Sale Invoice</p>
            <hr className='horizontal-line'></hr>
            <section id='saleinvoice'>
                <div className='saleinvoice-first'>

                </div>
                <div className='saleinvoice-container'>
                    <div id='one' className='saleinvoice-grid'>
                        <p>Invoice no</p>
                        <p className='one-text'>1</p>
                        <p className='one-last'></p>
                        <p>Invoice Date</p>
                        <p className='one-text'>4 th MAY, 2023</p>
                        <p className='one-last'>Add</p>
                        <p>Due Date</p>
                        <p className='one-text'>4 th May, 2023</p>
                        <p className='one-last'>Edit</p>
                    </div>
                    <div id='two' className='saleinvoice-grid'>
                        <p className='two-para'>Your GSTIN</p>
                        <input></input>
                        <p className='two-para'>State of Supply</p>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div id='three' className='saleinvoice-grid'>
                        <div>
                            <p onClick={() => setCustomer(true)}>Customer/</p>
                            <p>Business name</p>
                            {customer && <Customer closecustomer={closecustomer} />}
                        </div>
                        <div>
                        </div>
                        <select>
                            <option>Arjun Srivastav <button className='saleinvoice-button'>View info</button></option>
                        </select>
                    </div>
                    <div id='four' className='saleinvoice-grid'>
                        <h3 className='four-heading'>Products</h3>
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
                        <p className='four-para' onClick={() => setProduct(true)}>ADD MORE PRODUCTS+</p>
                        {product && <Product closeProduct={closeProduct} />}
                    </div>
                    <div id='five' className='saleinvoice-grid'>
                        <p className='fivepara'>Add Discount <span className='five-plus' onClick={() => setShowModal(true)}>+</span></p>
                        {showModal && <MyModal closeModal={closeModal} />}
                        <hr className='division'></hr>
                        <p className='fivepara'>Add Extra Charge <span className='five-plus' onClick={() => setExtra(true)}>+</span></p>
                        {extra && <MySecondModal close={close} />}
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
                            <div className='fifth-second'>
                                <div className=''>
                                    <p onClick={() => setPayment(true)}>Payment type</p>
                                    {payment && <PaymentType closepayment={closepayment} />}
                                </div>
                                <div className='cash'>
                                    <p>Cash</p>
                                </div>
                                <div className='fifth-select'>
                                    <select>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr className='division'></hr>
                        <div className='fifth-container'>
                            <h5 className='h5'>Terms and Conditions</h5>
                            <img className='img' src={img} alt=''></img>
                        </div>
                        <div className='termsandconditions'>
                            <ol type='1'>
                                <li>ITEMS once sold will not be taken back or Exchanged.</li>
                                <li>A late fee of 10% of due amount will be added for delayed payments.</li>
                            </ol>
                        </div>
                    </div>
                    <div id='six' className='saleinvoice-grid'>
                        <div className='sixth'>
                            <p>Price Break up</p>
                            <label className="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked />
                                <span className="checkbox-text" onClick={setSMS}>Send SMS To Party</span>
                                {sms && <Sendsms closesms={closesms} />}
                            </label>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p className='six-para'>Sale Price</p>
                            </div>
                            <div>
                                <p className='six-rate'>₹ 499</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p className='six-para'>Discount(20%)</p>
                            </div>
                            <div>
                                <p className='six-rate'>₹ 99.00</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth'>
                            <div>
                                <p className='six-para'>IGST @ 5%</p>
                            </div>
                            <div>
                                <p className='six-rate'>₹19.96</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='sixth six-last-para'>
                            <div>
                                <p className='six-para'>Total Selling Price</p>
                            </div>
                            <div>
                                <p className='six-rate'>₹ 419.16</p>
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
