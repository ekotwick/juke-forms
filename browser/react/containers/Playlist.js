import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

class Playlist extends Component {

	constructor(props){
		super(props);
		
		this.state = {};

		this.newInputItem = this.newInputItem.bind(this);

	}

	newInputItem(evt) {
  	evt.preventDefault();
  	console.log(evt);
  	const value = evt.target.value;
  	console.log(value);
  	this.setState({
  		inputValue: value
  	})
	}

	render(){

		return (

			<div>
				<NewPlaylist newInputItem={this.newInputItem}/>
			</div>

		)

	}



}

export default Playlist;