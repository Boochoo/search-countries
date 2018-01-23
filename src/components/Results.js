import React from 'react';
import createReactClass from 'create-react-class';

import Result from './Result';

var Results = createReactClass({
	render: function() {

		let countTrees = this.props.countries.map(function(country, i) {
			const areaCode = country.callingCodes[0];
			return <Result key={country.name}  name={country.name} capital={country.capital} 
					initial={country.alpha3Code} areaCode={areaCode} region={country.region} />
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