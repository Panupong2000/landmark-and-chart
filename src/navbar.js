import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
const Navbar = ()=>{
        return(
            <nav>
                <ul>
                    <li>
                    <Link to = "/Tree">TreeView</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = "/StockChart">StockChart</Link>  
                    </li>
                </ul>
                   
                
            </nav>
        )
    }

export default Navbar;