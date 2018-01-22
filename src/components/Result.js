import React from 'react';
import createReactClass from 'create-react-class';

import Icon from './Icon';
import Title from './Title';

var Result = createReactClass({
	render: function() {
		let indexString = this.props.symbol.toLowerCase() + this.props.number + this.props.name.toLowerCase();
		
		return (
			<div className="Result searchable" data-type={this.props.type} data-index={indexString}>
				<Icon number={this.props.number} symbol={this.props.symbol} name={this.props.name} mass={this.props.mass} />
				<Title title={this.props.name} />
			</div>
		);
	}
});

 export default Result;