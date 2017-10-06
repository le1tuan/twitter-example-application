import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import { searchingUser } from './actions';
import { connect } from 'react-redux';

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
        let data = e.target.value;
        const trimDatra = data.trim();
        console.log(trimDatra.length);
        if(trimDatra.length > 0){
            this.timeOut = setTimeout(() => {
                this.props.requestSearching({
                    query: data,
                });
            },1000);
        }    
    }
    render(){
        console.log(this.props.searchResult)
        const content = this.props.searchResult.map(x => {
            return (<div key={x.id}>
                        <img src={x.profile_image_url}/>
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

function mapDispatchToProps(dispatch) {
    return {
        requestSearching: (payload) => {
            dispatch(searchingUser(payload))
        }
    }
}

function mapStateToProps(state) {
    return {
        searchResult: state.searchingReducer.searchResult
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);