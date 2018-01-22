import React from 'react';
import createReactClass from 'create-react-class';

var Title = createReactClass({
	render: function() {
		return <div className="Title">{this.props.title}</div>
	}
})

export default Title;