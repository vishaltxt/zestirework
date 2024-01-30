import './customer.css'
import { useState } from 'react';
import AddNewCustomer from './addnewcustomer';
import AddFromList from './addfromlist';

const Customer = ({ closecustomer }) => {
    const [addnewcustomer, setAddNewCustomer] = useState(false);
    const closeaddnewcustomer = () => setAddNewCustomer(false);

    const [addfromlist, setAddFromList] = useState(false);
    const closeaddfromlist = () => setAddFromList(false);

    return (
        <>
            <div className="customer-main" >
                <div className='customer-container'>
                    <p className='right-side-fix' onClick={() => setAddFromList(true)}>ADD FROM LIST+</p>
                    {addfromlist && <AddFromList closeaddfromlist={closeaddfromlist} />}

                    <input></input>
                    <p className='left-side-fix' onClick={() => setAddNewCustomer(true)}>ADD NEW CUSTOMER</p>
                    {addnewcustomer && <AddNewCustomer closeaddnewcustomer={closeaddnewcustomer} />}
                </div>
            </div>
        </>
    )
}
export default Customer;