import React from 'react';
import createReactClass from 'create-react-class';

import Icon from './Icon';
import Title from './Title';

var Result = createReactClass({
	render: function() {
		let indexString = this.props.capital.toLowerCase() + this.props.region.toLowerCase() + this.props.name.toLowerCase() + this.props.areaCode;
		
		return (
			<div className="Result searchable" 
				data-type={this.props.region} data-index={indexString}>
				<Icon capital={this.props.capital} region={this.props.region} 
						initial={this.props.initial} population={this.props.population} />		
				<Title title={this.props.name} />
			</div>
		);
	}
});

 export default Result;