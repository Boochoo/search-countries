import React from 'react';
import createReactClass from 'create-react-class';

var Search = createReactClass({
	render: function() {
		return (
			<div className="Search">
				<input type="text" onKeyUp={this.props.handleSearchInput} placeholder="Type to search..." className="SearchField" />
			</div>
		);
	}
});

export default Search;