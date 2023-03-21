import React from 'react'
import { Link} from 'react-router-dom';

function Nav() {
    const handleClick =()=>{ 
        localStorage.clear();
    }
   
    return (
        <div className="nav-bar">
    <div className="title">Welcome , Pramod</div>
    <ul className="top-nav">        
        <li>
        <Link to="/"  onClick={handleClick}>Logout</Link>
        </li>
    </ul>
</div>
    )
}

export default Nav