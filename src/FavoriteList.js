import React from 'react';
import Linkify from 'react-linkify';
import Message from './Message';
import { connect } from 'react-redux';
import { sendMessage } from './actions';
class FavoriteList extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            data: '',
        }
        this.timeOut = '';
    }
    componentDidMount(){
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.requestSendMessage({
            id: this.props.match.params.id,
            text: this.state.inputValue
        })
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

function mapDispatchToProps(dispatch) {
    return {
        requestSendMessage: (payload) => { 
            dispatch(sendMessage(payload)) 
        },
    }
}
export default connect(null,mapDispatchToProps)(FavoriteList);