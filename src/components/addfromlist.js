import './addfromlist.css'

const AddFromList = ({ closeaddfromlist }) => {

    return (
        <>
            <div className="main-addfromlist" onClick={closeaddfromlist}>
                <div className='addfromlist-container'>
                    <div>
                        <h5>Arjun Srivastav</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddFromList;