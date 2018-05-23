import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
	componentDidMount() {
		document.title = ' Error | page not found | what to do ';
	}

	render() {
		return (
			<div className="container">
				<Header tagline="page not found" />
				<div className="alert alert-info">
					<strong>Oooops... sorry</strong>
					<br />
					the requestes
				</div>
			</div>
		);
	}
}

export default NotFound;
