import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.setState(
        {
            email: '',
            password: ''
        }
    )
  }

handleSubmit = event => {
event.preventDefault(); //prevent default html submit // handle with react instead
}

handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]:value})
}


  render() {
    return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign up with email and password</span>

        <form onSubmit={this.handleSubmit}>
            <input 
            name='email' 
            type="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            required/>
            <label >Email</label> 
            
            <input 
            name='password' 
            type="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            required/>
            <label >Password</label>

            <input type="submit" value="Submit Form "/>
        </form>
    </div>
    )
  }
}

export default SignIn;
