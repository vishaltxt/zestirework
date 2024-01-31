import React, { useState } from 'react';
import './productgstitem.css'
import camera from '../images/Camera.png'
import scancode from '../images/scancode.png'
import SearchIcon from '@mui/icons-material/Search'

const Productgstitem = ({ closeproductgstitem }) => {
    const [productType, setProductType] = useState('Item');
    const [isGSTSelected, setIsGSTSelected] = useState(true);

    const handleProductTypeChange = (type) => {
        setProductType(type);
    };
    const handleGSTSelectionChange = (event) => {
        setIsGSTSelected(event.target.value === 'GST');
    };

    return (
        <>
            <div className="productgstitem-main" >
                <div className='productgstitem-container'>
                    <div className='productgstitem-head'>
                        <div className='productgstitem-head'>
                            <h4 className={productType === 'Item' ? 'underline' : ''} onClick={() => handleProductTypeChange('Item')}>Item</h4>
                            <h4 className={productType === 'Service' ? 'underline' : ''} onClick={() => handleProductTypeChange('Service')}>Services</h4>
                        </div>
                        <div className='productgstitem-head moveright'>
                            <p>Tax setting</p>
                            <select className='gst-color' onChange={handleGSTSelectionChange} value={isGSTSelected ? 'GST' : 'No GST'}>
                                <option value="GST">GST</option>
                                <option value="No GST">No GST</option>
                            </select>
                        </div>
                    </div>
                    {productType === 'Item' && (
                        <div>
                            {isGSTSelected ? (
                                <div>
                                    <div className='productphoto-flex'>
                                        <div className='productphoto-in'>
                                            <p>Product Name</p>
                                            <input placeholder='T-Shirt'></input>
                                        </div>
                                        <div>
                                            <p className='plus-symbol'>+</p>
                                            <img className='camera' src={camera} alt=''></img>
                                            <p className='camera-p'>Photo</p>
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
                                            <select className='productvariety-select'>
                                                <option>PCS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='item-code'>
                                        <p>Item Code</p>
                                        <input></input>
                                        <img className='scan-code' src={scancode} alt=''></img>
                                    </div>
                                    <div className='item-category'>
                                        <p>Item Category</p>
                                        <input></input>
                                    </div>
                                    <div className='producttaxcode'>
                                        <div>
                                            <p>HSN/SAC Code</p>
                                            <input></input>
                                            <div className='SearchBar-icon'><SearchIcon /></div>
                                        </div>
                                        <div>
                                            <p>Tax %</p>
                                            <select>
                                                <option>GST@5%</option>
                                                <option value="">No Gst</option>
                                                <option value="">Gst@0%</option>
                                                <option value="">Gst@3%</option>
                                                <option value="">Gst@12%</option>
                                                <option value="">Gst@18%</option>
                                                <option value="">Gst@28%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='productgstitem-button'>
                                        <button className='productgstitem-delete' onClick={closeproductgstitem}>Delete</button>
                                        <button className='productgstitem-save' onClick={closeproductgstitem}>Save</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className='productphoto-flex'>
                                        <div className='productphoto-in'>
                                            <p>Product Name</p>
                                            <input placeholder='T-Shirt'></input>
                                        </div>
                                        <div>
                                            <p className='plus-symbol'>+</p>
                                            <img className='camera' src={camera} alt=''></img>
                                            <p className='camera-p'>Photo</p>
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
                                            <select className='productvariety-select'>
                                                <option>PCS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='item-code'>
                                        <p>Item Code</p>
                                        <input></input>
                                        <img className='scan-code' src={scancode} alt=''></img>
                                    </div>
                                    <div className='item-category'>
                                        <p>Item Category</p>
                                        <input></input>
                                    </div>
                                    <div className='producttaxcode-nogst'>
                                        <div>
                                            <p>HSN/SAC Code</p>
                                            <input></input>
                                            <div className='SearchBar-icon-nogst'><SearchIcon /></div>
                                        </div>
                                    </div>
                                    <div className='productgstitem-button'>
                                        <button className='productgstitem-delete' onClick={closeproductgstitem}>Delete</button>
                                        <button className='productgstitem-save' onClick={closeproductgstitem}>Save</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {productType === 'Service' && (
                        <div>
                            {isGSTSelected ? (
                                <div>
                                    <div className='productphoto-flex'>
                                        <div className='productphoto-in'>
                                            <p>Item Name</p>
                                            <input placeholder=''></input>
                                        </div>
                                        <div>
                                            <p className='plus-symbol'>+</p>
                                            <img className='camera' src={camera} alt=''></img>
                                            <p className='camera-p'>Photo</p>
                                        </div>
                                    </div>
                                    <div className='productvariety-service'>
                                        <div>
                                            <p>Sale price</p>
                                            <input placeholder=''></input>
                                        </div>

                                        <div>
                                            <p>Unit</p>
                                            <select className='productvariety-select-service'>
                                                <option>Day</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='item-code'>
                                        <p>Item Code</p>
                                        <input></input>
                                        <img className='scan-code' src={scancode} alt=''></img>
                                    </div>
                                    <div className='item-category'>
                                        <p>Item Category</p>
                                        <input></input>
                                    </div>
                                    <div className='producttaxcode'>
                                        <div>
                                            <p>HSN/SAC Code</p>
                                            <input></input>
                                            <div className='SearchBar-icon'><SearchIcon /></div>
                                        </div>
                                        <div>
                                            <p>Tax %</p>
                                            <select>
                                                <option>GST@5%</option>
                                                <option value="">No Gst</option>
                                                <option value="">Gst@0%</option>
                                                <option value="">Gst@3%</option>
                                                <option value="">Gst@12%</option>
                                                <option value="">Gst@18%</option>
                                                <option value="">Gst@28%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='productgstitem-button'>
                                        <button className='productgstitem-delete' onClick={closeproductgstitem}>Delete</button>
                                        <button className='productgstitem-save' onClick={closeproductgstitem}>Save</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className='productphoto-flex'>
                                        <div className='productphoto-in'>
                                            <p>Service Name</p>
                                            <input placeholder=''></input>
                                        </div>
                                        <div>
                                            <p className='plus-symbol'>+</p>
                                            <img className='camera' src={camera} alt=''></img>
                                            <p className='camera-p'>Photo</p>
                                        </div>
                                    </div>
                                    <div className='productvariety-service'>
                                        <div>
                                            <p>Sale price</p>
                                            <input placeholder='₹499'></input>
                                        </div>

                                        <div>
                                            <p>Unit</p>
                                            <select className='productvariety-select-service'>
                                                <option>Day</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='item-category'>
                                        <p>Item Category</p>
                                        <input></input>
                                    </div>
                                    <div className='producttaxcode-nogst'>
                                        <div>
                                            <p>HSN/SAC Code</p>
                                            <input></input>
                                            <div className='SearchBar-icon-nogst-service'><SearchIcon /></div>
                                        </div>
                                    </div>
                                    <div className='productgstitem-button'>
                                        <button className='productgstitem-delete' onClick={closeproductgstitem}>Delete</button>
                                        <button className='productgstitem-save' onClick={closeproductgstitem}>Save</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}
export default Productgstitem;