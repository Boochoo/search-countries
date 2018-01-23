import React from 'react';
import createReactClass from 'create-react-class';

import Result from './Result';

var Results = createReactClass({
	render: function() {

		let countTrees = this.props.countries.map(function(country, i) {
			console.log(country);
			
			const areaCode = country.callingCodes[0];
			return <Result key={i}  name={country.name} capital={country.capital} 
					initial={country.alpha3Code} population={country.population} region={country.region} />
		});

		return (
			<div className="Results">
				<style id="search_style"></style>
				{countTrees}
			</div>
		);
	}
});

export default Results;