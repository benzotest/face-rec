import React from 'react';

export const ImageLinkForm = ({onInputChange, onSubmit, onEnter})=>{
	return(
		<div>
			<p className={`f3`}>
				{`This magic brain will detect faces in your pics, 
				give it a try`}
			</p>
			<div style={{display: "flex", justifyContent: "center"}}>
				<div className={`pa4 br3 shadow-5`} style={{background: "grey"}}>
					<input className={`f4 pa2 w-70 center`} 
					type={`text`}
					onChange={onInputChange}
					onKeyDown={onEnter}/>
					<button className={`w-30 grow f4 link ph3 pv2 dib white bg-light-purple`}
					onClick={onSubmit}> 
						Detect </button>
				</div>
			</div>
		</div>
	)
}