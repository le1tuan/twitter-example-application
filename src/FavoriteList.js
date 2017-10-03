import React from 'react';
import 'whatwg-fetch';
import Linkify from 'react-linkify';
import Message from './Message';
class FavoriteList extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            data: '',
        }
        this.baseUrl = 'http://localhost:4000/';
    }
    componentDidMount(){
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var url = `${this.baseUrl}direct_messages/events/new`
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: this.state.inputValue
            })
        });
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value,
        })
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>submit</button>
                {this.state.data !== '' && <div><Linkify>{this.state.data.text}</Linkify></div> }
                <Message/>
            </div>
        )
    }
}

export default FavoriteList;