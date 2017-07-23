import React from 'react';
import TextColumn from './TextColumn';
import Footer from './Footer';

const Website = (props) => {

		return (
			<div className="container" style={contentStyles}>
				<div className="row" style={{color:'white'}}>
					<div className="col-md-6">
						<TextColumn>
							asdfasdfasdfasdfasdfasdfasd
						</TextColumn>
					</div>
					<div className="col-md-6">
						<TextColumn>
							zxcvzxcvzxcvzxcvzxcvzxcvzxcv
						</TextColumn>
					</div>
				</div>
				<Footer />
			</div>
		);
}

const contentStyles = {
	position: 'absolute', 
	backgroundColor:'black', 
	height: 1200 + 'px', 
	top: 800 + 'px',
	width: '100%'
};

export default Website;