import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getPair: function() {
    	return this.props.pair || [];
  	},
	render: function() {
		return <div className="results">
			{this.getPair().map(entry => {
				<div key={entry} className="entry">
					<h1>{entry}</h1>
				</div>
			})}
		</div>;
	}
});