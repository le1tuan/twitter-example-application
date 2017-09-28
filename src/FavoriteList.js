import React from 'react';
import 'whatwg-fetch';
import Linkify from 'react-linkify';
class FavoriteList extends React.PureComponent {
    constructor(props){
        super();
        this.state = {
            inputValue: '',
            data: '',
        }
    }
    componentDidMount(){
        this.baseUrl = 'http://localhost:4000/search/tweets';
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var url = `${this.baseUrl}?q=${this.state.inputValue}`
        fetch(url).then(data => {
            return data.json();
        }).then(data => {
            console.log(data)
            this.setState({
                data: data
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
                <button type="submit" onClick={this.handleSubmit}>Search</button>
                {this.state.data !== '' && <div><Linkify>{this.state.data.text}</Linkify></div> }
            </div>
        )
    }
}

export default FavoriteList;