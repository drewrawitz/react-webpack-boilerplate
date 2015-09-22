import React from 'react';
import Header from './components/Header';
import Greeter from './components/Greeter';

React.render(<Header/>, document.getElementById('header'));
React.render(<Greeter/>, document.getElementById('greeting'));
