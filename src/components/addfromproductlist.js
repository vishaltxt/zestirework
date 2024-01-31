import './addfromproductlist.css'
import SearchIcon from '@mui/icons-material/Search'

const AddFromProductList = ({ closeaddfromproductlist }) => {

    return (
        <>
            <div className="productlistitem-main" >
                <div className='productlistitem-container'>
                    <input className='addfromproduct-input' type='text' placeholder='      Search by name,code'></input>
                    <div className='searchbar-icon'><SearchIcon /></div>

                    <div >
                        <div className='addfromproduct-flex' onClick={closeaddfromproductlist}>
                            <p>T-shirt <span>Product</span></p>
                            <p>₹499</p>
                        </div>

                        <div className='addfromproduct-flex' onClick={closeaddfromproductlist}>
                            <p>Bottle <span>Product</span></p>
                            <p>₹299</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddFromProductList;