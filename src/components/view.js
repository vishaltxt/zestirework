import React from 'react'
import './view.css'
const View = () => {
    return (
        <div>
            <div className='view-header'>
                <h1>Resource Management</h1>
                <button>Create +</button>
            </div>
            <div className='view-profile-name'>
                <p className='name  '>Name</p>
                <name className="view-lower">Snigdha Dash</name>
            </div>
            <section className='view-profile'>
                <div className=''>
                    <p className='view-upper'>Employee id</p>
                    <p className='view-lower'>intern</p>
                </div>
                <div>
                    <p className='view-upper'>Email id</p>
                    <p className='view-lower'>25/01/2024</p>
                </div>
                <div>
                    <p className='view-upper'>Employee position</p>
                    <p className='view-lower'>UI UX Designer</p>
                </div>
                <div>
                    <p className='view-upper'>Joining Date</p>
                    <p className='view-lower'>22/01/2024</p>
                </div>
            </section>
            <div className='skill-section'>
                <p>Skills</p>
                <button>Ui</button>
                <button>Prototyping</button>
            </div>
            <section className='view-profile'>
                <div>
                    <p className='view-upper'>Salary</p>
                    <p className='view-lower'>intern</p>
                </div>
                <div>
                    <p className='view-upper'>Rating</p>
                    <p className='view-lower'>25/01/2024</p>
                </div>
                <div>
                    <p className='view-upper'>Assigned device id</p>
                    <p className='view-lower center'>1</p>
                </div>
            </section>
            <div className='view-profile'>
                <p>Remarks</p>
            </div>
            <p className='dash'>-</p>
        </div>
    )
}

export default View;
