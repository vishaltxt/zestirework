import './product.css'
import { useState } from 'react';
import AddFromProductList from './addfromproductlist';
import Productgstitem from './productgstitem';

const Product = ({ closeProduct }) => {
    const [productgstitem, setProductgstitem] = useState(false);
    const closeproductgstitem = () => setProductgstitem(false);

    const [addfromproductlist, setAddFromProductList] = useState(false);
    const closeaddfromproductlist = () => setAddFromProductList(false);

    return (
        <>
            <div className="product-main" >
                <div className='product-container'>
                    <p className='right-one' onClick={() => setAddFromProductList(true)}>ADD FROM LIST+</p>
                    {addfromproductlist && <AddFromProductList closeaddfromproductlist={closeaddfromproductlist} />}

                    <input></input>
                    <p className='left-one' onClick={() => setProductgstitem(true)}>ADD NEW PRODUCT</p>
                    {productgstitem && <Productgstitem closeproductgstitem={closeproductgstitem} />}
                </div>
            </div>
        </>
    )
}
export default Product;