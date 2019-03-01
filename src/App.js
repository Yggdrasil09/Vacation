import React, {Component} from 'react';
import './App.css';
import Heading from './components/heading';
import Input from './components/input';

class App extends Component {
  render() {
    return ( 
		<div>
			<Heading/>
			<Input/>
		</div>
    );
  }
}

export default App;