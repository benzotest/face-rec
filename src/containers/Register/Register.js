import React, {Component} from 'react';
import './Register.css';
import bcryptjs from 'bcryptjs';

export class Register extends Component {

	constructor(props){
		super(props);
		this.state={
      registerEmail: '',
      registerPassword: '',
      registerName: ''
		}
	}

  componentDidMount(){
    console.log(this.state)
  }

  onEmailChange = (event) =>{
    this.setState(Object.assign(this.state, {registerEmail: event.target.value}))
  }

  onPasswordChange = (event) =>{
    this.setState(Object.assign(this.state, {registerPassword: event.target.value}))
  }

  onNameChange = (event) =>{
    this.setState(Object.assign(this.state, {registerName: event.target.value}))
  }

  onRegisterSubmit = () =>{
    console.log("click", this.state)
    const {onRouteChange, loadUser} = this.props;
    const {registerName,registerPassword,registerEmail}=this.state;
    const password = bcryptjs.hashSync(registerPassword, 8);
    fetch("http://localhost:3000/register",{
      method: "post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        name: registerName,
        password: password,
        email: registerEmail
      })
    })
    .then(res=> res.json())
    .then((res)=>{
      if(res.status){
        loadUser(res.user);
        onRouteChange("home");
      }
    })
  }

	render(){
		return(
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 mw6">
	    <main className="pa4 black-80">
  		<div className="measure center">
    	<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      	<legend className="f1 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name"
        onChange={this.onNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address"
        onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"
        onChange={this.onPasswordChange}/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register"
      onClick={this.onRegisterSubmit}/>
    </div>
  </div>
</main>
</article>
		)
	}
}