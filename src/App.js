import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';

import Header from './components/Header';
import Results from './components/Results';

import elements from './data';

var App = createReactClass({
	getDefaultProps: function() {
		return {
			elements: elements
		}
	},
	handleSearchInput: function(e) {
		console.log(e.target.value);
		
		let searchStyle = document.getElementById('search_style');
		if(!e.target.value) {
			searchStyle.innerHTML = "";
			return;
		}
		
		searchStyle.innerHTML = ".searchable:not([data-index*=\"" + e.target.value.toLowerCase() + "\"]) { display: none; }";
	},
	render: function() {
		return (
			<div className="App">
				<Header handleSearchInput={this.handleSearchInput} />
				<Results elements={this.props.elements} />
			</div>
		);
	}
});

export default App;
