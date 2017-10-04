import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteList from './FavoriteList';
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Search}/>
                    <Route path="/message/:id" component={FavoriteList}/>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));