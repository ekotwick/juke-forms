import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends Component {

 constructor(props){
    super();
    this.state = {
    	inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  // componentDidMount () {
    

  //  // selectAlbum(albumId);
  // }

  handleChange(evt) {
  	const value = evt.target.value;
  	this.setState({
  		inputValue: value
  	})
  }

  render () {
  	const inputValue = this.state.inputValue;
  	const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    
    return (
    	<div>
      	<FilterInput handleChange={this.handleChange}/>
      	<Artists artists={filteredArtists} />
    	</div>
      
    );
  }
}

export default FilterableArtistsContainer;

// doin't leave your props empty. it will cause an error. 
// 