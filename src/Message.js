import React from 'react';
import io from 'socket.io-client';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message:[],
        };
        this.socket = io('http://localhost:4000');
        this.socket.on('new_message', (data) => {
            console.log('-------------');
            this.setState((state) => {
                return {
                    message: state.message.concat(data)
                }
            })
            console.log('sauuu', this.state)
        })
    }
    componentDidMount(){
    }
    render(){
        const content = this.state.message.map(x => {
            return <div>{x.screen_name} : {x.text}</div>
        })
        return(
            <div>
                <div>
                {content}
                </div>
            </div>
        )
    }
}
export default Message;