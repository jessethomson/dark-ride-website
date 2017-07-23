import React from 'react';
import src1 from '../assets/1.png';
import src2 from '../assets/2.png';
import src3 from '../assets/3.png';
import src4 from '../assets/4.png';
import src5 from '../assets/5.png';
import src6 from '../assets/6.png';
import src7 from '../assets/7.png';
import src8 from '../assets/8.png';
import src9 from '../assets/9.png';

const layerData = [
	{
		startY: 0,
		speedY: 0.3,
		height: 900,
		width: '100%',
		imageSrc: src2,
		minY: 0
	},
	{
		startY: 75,
		speedY: 0.4,
		height: 750,
		width: '100%',
		imageSrc: src3,
		minY: 0
	},
	{
		startY: 150,
		speedY: 0.5,
		height: 650,
		width: '100%',
		imageSrc: src4,
		minY: 0
	},
	{
		startY: 250,
		speedY: 0.6,
		height: 550,
		width: '100%',
		imageSrc: src5,
		minY: 0
	},
	{
		startY: 350,
		speedY: 0.7,
		height: 450,
		width: '100%',
		imageSrc: src6,
		minY: 0
	},
		{
		startY: 450,
		speedY: 0.9,
		height: 350,
		width: '100%',
		imageSrc: src7,
		minY: 0
	},
	{
		startY: 750,
		startX: -400,
		speedY: 1.9,
		speedX: 1.2,
		minY: 450,
		maxX: 0,
		height: 350,
		width: '40%',
		imageSrc: src8, // pirate ship
		minWidth: 250
	}
];

export default class ParallaxLayers extends React.Component {
	layers = []
	renderingLayers = false

	calculateTop = (scrollTop, { startY, speedY, minY }) => {
		return Math.max(minY, startY - (speedY * scrollTop) + scrollTop);
	}

	calculateLeft = (scrollTop, { startX, speedX, maxX }) => {
		console.log(`startX: ${startX}, speedX: ${speedX}, maxX: ${maxX}`)
		// var test = Math.max(minX, startX - (speedX * scrollTop) + scrollTop);
		// var test = startX - (speedX * scrollTop) + scrollTop;
		var test = Math.min(maxX,startX + (speedX * scrollTop))// + scrollTop;
		console.log(test);
		return test;
	}

	componentDidMount = () => {
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleResize = () => {
		// resize
	}

	handleScroll = (event) => {
		if(!this.renderingLayers) {
			this.renderingLayers = true;
			window.setTimeout(() => {

				this.scrollTop = document.body.scrollTop;

				this.layers.forEach(this.setTop);
				this.renderingLayers = false;
			}, 15); // ~ 60 fps
		}
	}

	setTop = (layer, index) => {
		layer.style.top = this.calculateTop(this.scrollTop, layerData[index]) + 'px';
		if(layerData[index].speedX)
			layer.style.left = this.calculateLeft(this.scrollTop, layerData[index]) + 'px';
	}

	render() {
		const layerStyles = {
			position:'absolute', 
			overflowY: 'hidden',
			overflowX: 'hidden',
		};
		const imgElements = layerData.map((data, index) => {
			return <img style={{...layerStyles, 
														top: data.startY + 'px',
														left: data.startX + 'px',
														minWidth: data.minWidth}} 
									key={index}
									ref={(ref) => { this.layers[index] = ref; }} 
									width={data.width}
									height={data.height + 'px'}
									src={data.imageSrc} />;
		});

		return (
			<div>
				<img src={src1} width="100%" height="800px" style={{position:'absolute', top:'0px', overflowY:'hidden'}} />
				{imgElements}
				<img src={src9} width="100%" height="60px" style={{position:'absolute', top:'740px', overflowY:'hidden'}} />
			</div>
		);
	}

};
