import React from 'react';
import createReactClass from 'create-react-class';

var Icon = createReactClass({
	render: function() {
		return (
			<div className="Icon" data-type={this.props.region}>
				<div className="Number">{this.props.areaCode}</div>
				<div className="Symbol">{this.props.initial}</div>
				<div className="Name">{this.props.capital}</div>
				<div className="Mass">{this.props.region}</div>
			</div>
		)
	}
});

export default Icon;