import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><ToDo /></Provider>, document.getElementById('root'));