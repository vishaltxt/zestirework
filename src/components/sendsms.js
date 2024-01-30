import './sendsms.css'

const Sendsms = ({ closesms }) => {

    return (
        <>
            <div className="main-payment">
                <div className='payment-container'>
                    <div className='upper-color'>
                        <h4>Payment Remainder</h4>
                        <p>A SMS will be sent from Audeet to Customer with following message.</p>
                    </div>
                    <p className='sms-para'>Sir/Madam</p>
                    <p className='sms-para'>Your Payment of Rs 419 is pending at Krinvi Trends</p>
                    <p className='sms-para'>Thank you,</p>
                    <p className='sms-para'>Audeet</p>
                </div>
            </div>
        </>
    )
}
export default Sendsms;