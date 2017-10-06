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
        this.timeOut = '';
    }
    componentDidMount(){
    }
    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        var url = `${this.baseUrl}direct_messages/events/new`
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.match.params.id,
                text: this.state.inputValue
            })
        });
        this.setState({
            inputValue: '',
        })
    }
    handleChange = (e) => {
        e.preventDefault();
        let event = e;
        const input = e.target.value;
        this.setState({
            inputValue: input,
        });
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.inputValue} />
                <button onClick={this.handleSubmit}>submit</button>
                <Message id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default FavoriteList;