import React from 'react';

export const Navigation = ({onRouteChange, isSignedIn}) =>{
	if(isSignedIn){
		return(
			<nav style={{display: "flex", justifyContent: "flex-end"}}>
				<p className={`f3 link dim black underline pa3 pointer`}
				onClick={()=>{onRouteChange("signin")}}> 
				sign out 
				</p>
			</nav>
		)
	}
	else{
		return(
			<nav style={{display: "flex", justifyContent: "flex-end"}}>
				<p className={`f3 link dim black underline pa3 pointer`}
				onClick={()=>{onRouteChange("register")}}> 
				register
				</p>
				<p className={`f3 link dim black underline pa3 pointer`}
				onClick={()=>{onRouteChange("signin")}}> 
				sign in
				</p>
			</nav>
		)
	}	
}