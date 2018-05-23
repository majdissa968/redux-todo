import React from 'react';
import Header from './Header';

class Help extends React.Component {
	componentDidMount() {
		document.title = ' help | what to do ';
	}

	render() {
		return (
			<div className="container">
				<Header tagline="your questions will be answered here" />
				<dt>
					<dt>where is the datta stored </dt>
					<dt>we store the information in your browser localStorage </dt>
				</dt>
			</div>
		);
	}
}

export default Help;
