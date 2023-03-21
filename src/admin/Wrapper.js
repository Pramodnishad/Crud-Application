import React from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'


function Wrapper(props) {
    return (
        <>
           <Nav />
           <div className="wraper">
                <div className="left-content">
                <Sidebar />
                </div>
                <div className="right-content">
                {props.children}
                </div>
            </div> 
        </>
    )
}

export default Wrapper
