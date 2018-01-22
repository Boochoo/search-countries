import React from 'react';
import createReactClass from 'create-react-class';

import Result from './Result';

var Results = createReactClass({
	render: function() {
		let elements = this.props.elements.map(function(element, i) {
			return <Result key={element.number} number={element.number} symbol={element.symbol} name={element.name} mass={element.mass} type={element.type} />
		});
		return (
			<div className="Results">
				<style id="search_style"></style>
				{elements}
			</div>
		);
	}
});

export default Results;