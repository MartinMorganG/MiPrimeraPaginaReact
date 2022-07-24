import React from 'react';

const Tablas = () => {
    return ( 
        <div className='container--tablita'>
            <table className='tablita'>
                <tbody>
                    <tr>
                        <th >#</th>
                        <th >Titulo</th>
                        <th >Enlace</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Un titulo Random</td>
                        <td>www.youtube.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Un titulo Random</td>
                        <td>www.youtube.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Un titulo Random</td>
                        <td>www.youtube.com</td>
                    </tr>
                    
                </tbody> 
            </table>
        </div>
     );
}
 
export default Tablas;