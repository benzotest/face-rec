import React, {Component} from 'react';
import './App.css';
import {Navigation} from '../../components/Navigation/Navigation.js'; 
import {Logo} from '../../components/Logo/Logo.js'; 
import {ImageLinkForm} from '../../components/ImageLinkForm/ImageLinkForm.js';
import {Rank} from '../../components/Rank/Rank.js';
import {FaceRec} from '../../components/FaceRec/FaceRec.js';
import {SignIn} from '../SignIn/SignIn.js';
import {Register} from '../Register/Register.js';

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/1024px-080103_hakkai_fuji.jpg',
      route: '',
      isSignedIn: false,
      user:{
        id:"",
        name:"",
        email:"",
        entries: "",
        joined: ""
      }
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/")
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      console.log(this.state.user)
      })
    .catch(err => console.log(err));
  }

  loadUser = (data) => {
    this.setState({user:{
      id : data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }
  })
    console.log(this.state.user)
  }

  onInputChange = (event)=>{
    console.log(event.target.value)
    this.setState({input: event.target.value})
  }

  onSubmit = () =>{
    console.log("click")
    this.setState({imageUrl: this.state.input})
    if(this.state.imageUrl.length > 0){
      fetch("http://localhost:3000/image", {
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(res=>res.json())
      .then((res)=>{
        if(res.status){
          console.log(res)
          this.setState(Object.assign(this.state.user, {entries: res.entries}))
        }
      })
    }
  }
    
  onEnterPress = (event)=>{
    if(event.keyCode === 13){
       console.log("enter")
       this.setState({imageUrl: this.state.input})
    }
  }

  onRouteChange = (route) =>{
    if(route === "signin"){
      this.setState({route: route})
      this.setState({user:{
        id:"",
        name:"",
        email:"",
        entries: "",
        joined: ""
      }})
    }
    else if(route === "home"){
      this.setState({route: route});
      this.setState({isSignedIn: true})
    }
    else if(route === "register"){
      this.setState({route: route});
      this.setState({isSignedIn: false})
    }
    console.log(this.state.user)
  }
 
  render(){
    switch(this.state.route){
      case 'signin':
      return(
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}/>
          <Logo/>
          <SignIn onRouteChange={this.onRouteChange} 
          loadUser = {this.loadUser}/>
        </div>
      )
      case 'register':
      return(
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}
           isSignedIn={this.state.isSignedIn}/>
          <Logo/>
          <Register onRouteChange={this.onRouteChange}
          loadUser={this.loadUser}/>
        </div>
      )
      case 'home':
      return(
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}
           isSignedIn={this.state.isSignedIn}/>
          <Logo/>
          <ImageLinkForm onInputChange={this.onInputChange}
          onSubmit={this.onSubmit} onEnter={this.onEnterPress}/>
          <Rank name={this.state.user.name}
          entry = {this.state.user.entries}/>
          <FaceRec imageUrl={this.state.imageUrl}/>
        </div>
      )
      default:
      return(
        <div className="App">
          <Navigation onRouteChange={this.onRouteChange}
           isSignedIn={this.state.isSignedIn}/>
          <Logo/>
          <SignIn onRouteChange={this.onRouteChange}
          loadUser = {this.loadUser}/>
        </div>
      )
    }
  }
}

export default App;

