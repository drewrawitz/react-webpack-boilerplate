import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Greeter from './components/Greeter';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Greeter/>, document.getElementById('greeting'));
