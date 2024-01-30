import './paymenttype.css'

const PaymentType = ({ closepayment }) => {

    return (
        <>
            <div className="main-payment">
                <div className='payment-container'>
                    <h4>Select Payment Mode<span className='cross' onClick={closepayment}>X</span></h4>
                    <hr></hr>
                    <li><span>cash</span></li>
                    <li><span>card</span></li>
                    <li><span>Cheque</span></li>
                    <li><span>NEFT/RTGS</span></li>
                </div>
            </div>
        </>
    )
}
export default PaymentType;