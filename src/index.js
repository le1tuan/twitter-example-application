import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteList from './FavoriteList';
import Search from './Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware),);
sagaMiddleware.run(rootSaga);
class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Search}/>
                        <Route path="/message/:id" component={FavoriteList}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));