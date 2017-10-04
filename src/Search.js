import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
        }
        this.baseUrl = 'http://localhost:4000/';
        this.timeOut = '';
    }
    handleChange = (e) => {
        e.preventDefault();
        clearTimeout(this.timeOut);
        const data = e.target.value;
        this.timeOut = setTimeout(() => {
            fetch(`${this.baseUrl}users/search?q=${data}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    list: res
                })
            })
            .catch(e => {
                console.log(e);
            })
        },1000);
    }
    render(){
        const content = this.state.list.map(x => {
            return (<div key={x.id}>
                        <p>{x.screen_name}</p>
                        <Link to={`/message/${x.id}`} >Message</Link>
                    </div>)
                    
        })
        return(
            <div>
                <div>
                    <h1>Search User</h1>
                    <input onChange={this.handleChange} />
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;