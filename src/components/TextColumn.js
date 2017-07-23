import React from 'react';

const TextColumn = (props) => {
	const styles = {
		textAlign: 'center',
		padding: 40
	};

	return (
		<div style={styles}>
			{props.children}
		</div>
	)
};

export default TextColumn;