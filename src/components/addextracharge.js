import './addextracharge.css'

const MySecondModal = ({ close }) => {

    return (
        <>
            <div className="main-model">
                <div className="main-model-container">
                    <h2>Add Extra charge</h2>
                    <div className='main-extracharge'>
                        <div>
                            <p>Charge name</p>
                            <input placeholder='20%'></input>
                        </div>
                        <div>
                            <p>Charge Amount</p>
                            <input placeholder='99.80'></input>
                        </div>
                    </div>
                    <p className='secondmodel-para'>Add More+</p>
                    <button className='second-model-btn' onClick={close}>Save</button>
                </div>
            </div>
        </>
    )
}
export default MySecondModal;