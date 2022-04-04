import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt'


export const Logo = () =>{
	return(
		<div className={`ma3 mt0`}>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
 				<div className="Tilt-inner"> 👽 </div>
			</Tilt>
		</div>
	)
}