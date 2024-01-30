// import { Paid } from '@mui/icons-material';
import './addnewcustomer.css'

const AddNewCustomer = ({ closeaddnewcustomer }) => {

    return (
        <>
            <div className="main-addnewcustomer">
                <div className='addnewcustomer-container'>
                    <p className='addnewcustomer-para'>Customer/Business</p>
                    <input type='name' placeholder='Arjun Shrivastav' className='addnewcustomer-input'></input>
                    <p className='addnewcustomer-para'>Phone no.</p>
                    <input type='number' placeholder='+91-8767554643' className='addnewcustomer-input'></input>
                    <hr className='addnewcustomer-hr'></hr>
                    <p className='addnewcustomer-para'>Email Address</p>
                    <input type='email' placeholder='arjunsrivastav449@gmail.com' className='addnewcustomer-input'></input>
                    <div className='addnewcustomer-middle'>
                        <div>
                            <p className='addnewcustomer-para'>GSTIN</p>
                            <input></input>
                        </div>
                        <div>
                            <p className='addnewcustomer-para'>State</p>
                            <input></input>
                        </div>
                    </div>
                    <p className='addnewcustomer-para'>Billing/shipping address</p>
                    <input></input>
                    <div className='addnewcustomer-box'>
                        <div className='radio-btns'>
                            <div>

                                <label className="rradio-label">
                                    <input type="radio" className="rradio-input" value="paid" checked />
                                    <span className="rradio-text">To be collected from customer</span>
                                </label>
                            </div>
                            <div>

                                <label className="rradio-label">
                                    <input type="radio" className="rradio-input" value="unpaid" />
                                    <span className="rradio-text">To be paid to customer</span>
                                </label>
                            </div>
                        </div>
                        <p className='addnewcustomer-para'>Enter the Amount</p>
                        <hr className='addnewcustomer-hr2'></hr>
                    </div>
                    <div className='addnewcustomer-buttons'>
                        <button className='addnewcustomer-delete' onClick={closeaddnewcustomer}>Delete</button>
                        <button className='addnewcustomer-save' onClick={closeaddnewcustomer}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddNewCustomer;