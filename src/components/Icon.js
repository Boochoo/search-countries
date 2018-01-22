import React from 'react';
import createReactClass from 'create-react-class';

var Icon = createReactClass({
	render: function() {
		return (
			<div className="Icon" data-type={this.props.type}>
				<div className="Number">{this.props.number}</div>
				<div className="Symbol">{this.props.symbol}</div>
				<div className="Name">{this.props.name}</div>
				<div className="Mass">{this.props.mass}</div>
			</div>
		)
	}
});

export default Icon;