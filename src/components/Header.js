import React from 'react';
import createReactClass from 'create-react-class';

import Search from './Search';

var Header = createReactClass({
	render: function() {
		return (
			<div className="Header">
				<Search handleSearchInput={this.props.handleSearchInput} />
			</div>		
		);
	}
});

export default Header;