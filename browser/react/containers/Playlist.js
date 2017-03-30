import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class Playlist extends Component {

	constructor(props){
		super(props);
		
		this.state = {
		  value:'',
		  isDisabled :false
		};

		this.newInputItem = this.newInputItem.bind(this);
		this.grabValue = this.grabValue.bind(this);
		

	}

	grabValue(value){
		this.setState({value:value});
		if(value.length > 16 ){
			this.setState({isDisabled:true})
		}else{
			this.setState({isDisabled:false})
		}
	}
	newInputItem(evt) {
	  	evt.preventDefault();
	  	
	  	console.log(this.state.value);
	  	axios.post('/api/playlists', {
	  		name: this.state.value
	  	 })
  		.then(res => res.data)
  		.then(result => {
    		console.log(result) // response json from the server!
  		});

	  	this.setState({
	  		value: ''
	  	})


	}


	render(){

		return (

			<div>
				<NewPlaylist value={this.state.value}  isDisabled={this.state.isDisabled} newInputItem={this.newInputItem} grabValue={this.grabValue}  />
			</div>

		)

	}



}

export default Playlist;