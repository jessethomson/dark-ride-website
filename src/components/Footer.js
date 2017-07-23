import React from 'react';
import footer1 from '../assets/footer-1.png';
import footer2 from '../assets/footer-2.png';

const StaticContent = (props) => {
	
		return (
				<div className="row">
					<img style={{...styles, height: 300}} src={footer1} alt='' />
					<img style={{...styles, height: 250}} src={footer2} alt='' />
				</div>
		);
}

const styles = {
	width:'100%', 
	position:'absolute',
	bottom:0
};

export default StaticContent;