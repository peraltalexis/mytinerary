import React from 'react'
import "./footer.css"
import { NavLink } from '../navbar/NavbarElements'



const footer = () => {
    return (
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <div className='col1'>
                        <ul className='list-unstyled'>
                        <NavLink to='facebook'>Facebook</NavLink>
                        <NavLink to='twitter'>Twitter</NavLink>
                        </ul>
                    </div>
                    <div className='col2'>
                        <ul className='list-unstyled'>
                        <NavLink to='instagram'>Instagram</NavLink>
                        <NavLink to='youtube'>Youtube</NavLink>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} MyTinerary | All rights reserved
                    </p>
                </div>
            </div>
          
        </div>
    )
}

export default footer
