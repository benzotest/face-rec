import React from 'react';

export const FaceRec = ({imageUrl}) =>{
	return(
		<div style={{display: "flex", justifyContent: "center"}}>
			<img src={imageUrl}
			style={{ width: "320px", height:"320px"}}
			id={`FaceRec`}
			alt={`for-app`}/>
		</div>
	)
}