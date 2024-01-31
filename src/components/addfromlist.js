import './addfromlist.css'

const AddFromList = ({ closeaddfromlist }) => {

    return (
        <>
            <div className="main-addfromlist" >
                <div className='addfromlist-container'>
                    <div className='addfromlist-people' onClick={closeaddfromlist}>
                        <h5>Arjun Srivastav</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddFromList;