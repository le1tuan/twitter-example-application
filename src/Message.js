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
            this.setState((state) => {
                return {
                    message: state.message.concat(data)
                }
            });
        })
    }
    render(){
        console.log(this.state.message);
        const result = this.state.message.filter( x => {
            return x.recipient_id == this.props.id;
        });
        console.log(result);
        const content = result.map(x => {
            return <div key={x.message_id}>{x.screen_name} : {x.text}</div>
        });
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