import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteList from './FavoriteList';
class App extends React.Component {
    render(){
        return (
            <div>
                <FavoriteList/>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));