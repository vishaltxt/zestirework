import './saleinvoicemodal.css'

const MyModal = ({ closeModal }) => {

    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-container">
                    <h2>Add discount</h2>
                    <div className='discount-main'>
                        <div>
                            <p>Discount %</p>
                            <input placeholder='20%'></input>
                        </div>
                        <div>
                            <p>Discount Amount</p>
                            <input placeholder='99.80'></input>
                        </div>
                    </div>
                    <button className='model-btn' onClick={closeModal}>Save</button>
                </div>
            </div>
        </>
    )
}
export default MyModal;