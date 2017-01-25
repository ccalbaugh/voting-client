import React from 'react';

export default React.createClass({
	getPair: function() {
		return this.props.pair || [];
	},
	isDisabled: function() {
		return !!this.props.hasVoted;
	},
	render: function() {
		return <div className="voting">
			{this.getPair().map(entry =>
				<button key={entry}
						disabled={this.isDisabled()}
						onclick={() => this.props.vote(entry)}>
					<h1>{entry}</h1>
				</button>
			)}
		</div>;
	}
});