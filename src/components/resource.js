import React, { useState } from 'react'
import './resource.css'
import img from '../images/profilepic.png'
import ResourceModal from './resourcemodal'
const Resource = () => {
    const [showModel, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    return (
        <>
            <div>
                <div className='header'>
                    <h1>Resource Management</h1>
                    <button>Create Resource</button>
                </div>
                <section className='profile'>
                    <div className='profile-img'>
                        <img src={img} alt=""></img>
                        <name>Snigdha Dash</name>
                    </div>
                    <div>
                        <p className='upper-part'>Employee id</p>
                        <p className='lower-part'>365477887</p>
                    </div>
                    <div>
                        <p className='upper-part'>Email-id</p>
                        <p className='lower-part'>snigdhadash100@gmail.com</p>
                    </div>
                    <div>
                        <p className='upper-part'>Employee Position</p>
                        <p className='lower-part'>UI-UX Designer</p>
                    </div>
                    <div className='view'>
                        <p onClick={() => setShowModal(true)}> View</p>
                    </div>
                </section>
                {showModel && <ResourceModal closeModal={closeModal} />}
            </div>
        </>
    )
}
export default Resource;
