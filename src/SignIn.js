import React from "react"

class SignIn extends React.Component{
    
    constructor(props){
        super(props);

        this.state = { username: "asad", password: "wow" };
    }
    
    handleChange = event => {
        console.log(event);
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
      }

    render(){
        return(
            <div>
                <form handleSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <br />
                    <input type="text" name="username" onChange={this.handleChange} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" onChange={this.handleChange} />
                    <br />
                </form>
            </div>
        )
    }

}


export default SignIn