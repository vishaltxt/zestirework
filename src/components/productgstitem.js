import './productgstitem.css'

const Productgstitem = ({ closeproductgstitem }) => {

    return (
        <>
            <div className="productgstitem-main" >
                <div className='productgstitem-container'>
                    <div className='productgstitem-head'>
                        <div className='productgstitem-head'>
                            <h4>Item</h4>
                            <h4>Services</h4>
                        </div>
                        <div className='productgstitem-head moveright'>
                            <p>Tax setting</p>
                            <select className='gst-color'>
                                <option>GST</option>
                                <option>No GST</option>
                            </select>
                        </div>
                    </div>
                    <div className='productphoto-flex'>
                        <div>
                            <p>Product Name</p>
                            <input></input>
                        </div>
                        <div>
                            <p>photo</p>
                        </div>
                    </div>
                    <div className='productvariety'>
                        <div>
                            <p>Sale price</p>
                            <input placeholder='₹499'></input>
                        </div>
                        <div>
                            <p>Purchase price</p>
                            <input placeholder='₹199'></input>
                        </div>
                        <div>
                            <p>Unit</p>
                            <select>
                                <option>PCS</option>
                            </select>
                        </div>
                    </div>
                    <p>Item Code</p>
                    <input></input>
                    <p>Item Category</p>
                    <input></input>
                    <div className='producttaxcode'>
                        <div>
                            <p>HSN/SAC Code</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Tax %</p>
                            <select>
                                <option>GST@5%</option>
                            </select>
                        </div>
                    </div>
                    <div className='productgstitem-button'>
                        <button className='productgstitem-delete' onClick={closeproductgstitem}>Delete</button>
                        <button className='productgstitem-save' onClick={closeproductgstitem}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Productgstitem;