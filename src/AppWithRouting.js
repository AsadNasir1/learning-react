import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import NextApp from './likenext';

class AppWithRouting extends React.Component{
    render(){
        return (
            <main>
                <ul>
                    <li>
                        <a href="/about">About</a>                                                
                    </li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/app">App</a></li>
                    <li><a href="/SignIn">SignIn</a></li>
                    <li><a href="/NextApp">Next App</a></li>
                </ul>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/app" component={App} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/NextApp" component={NextApp} />
            </Switch>
        </main>
        )
    }
}

class Home extends React.Component{
    render(){
        return (
            <div>This is home page</div>
        )
    }
}

class About extends React.Component{

    constructor(props){
        super(props);

        this.state = { data: [
            {
              name: "asad",
              age: 32
            },
            {
              name: "wifi",
              age: 26
            },
            {
              name: "umar",
              age: 5
            }
            ] };
    }

    componentDidMount(){
        const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({ data: res })
        });

    }    
    
    render(){
        return (
        <div>This is about page
            <br></br>
        <div>{ JSON.stringify(this.state.data) }</div>
        </div>        
            )
    }
}

class Contact extends React.Component{
    render(){
        return (
            <div>This is contact page</div>
        )
    }
}

export default AppWithRouting;