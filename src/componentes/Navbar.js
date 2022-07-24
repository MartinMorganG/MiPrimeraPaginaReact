import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const cambiarFondo = () => {
        
    }

    return ( 
        <nav>
            <div className='navpart1'>
                <ul>
                    <li><a href='../../public/index.html' className='nombreInicio'>Martin Alberto</a></li>
                </ul>
            </div>
            <div className='navpart2'>
                <ul>
                    <li><button className='btn--cambiar' onClick={cambiarFondo()}>
                            <FontAwesomeIcon icon={faAdjust} className="btn--logo"/>
                        </button></li>
                    <li><a></a></li>
                    <li><a>Acerca de mi</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;