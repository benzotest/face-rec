import React from 'react';

export const Rank = ({name, entry})=>{
	return(
		<div>
			<div className={`white f3`}>
				{`${name}, your current rank is`}
			</div>
			<div className={`white f1`}>
				{entry}
			</div>
		</div>
	)
}