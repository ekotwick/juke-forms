import React from 'react';
import { Link } from 'react-router';

const NewPlayList = function(props) {

	const newInputItem = props.newInputItem;

	let turnOnValidation = false;
	let warningMsg = ""

	if(props.value ===""){
		warningMsg='Please enter a name'		
		turnOnValidation = true
	} else if(props.isDisabled == true){
		warningMsg='Field can not have more than 16 characters '		
		turnOnValidation = true
	} else{
		turnOnValidation = false
	}


	console.log(this + 'from 22');
	return (
		<div className="well">
		  <form className="form-horizontal" onSubmit={props.handleSubmit}>
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input className="form-control" value={props.value} type="text" onChange={event => {
		          	
		          	props.grabValue(event.target.value);
		          }}/>
		          { turnOnValidation? <div className="alert alert-warning">{warningMsg}</div> : null }
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button type="submit" className="btn btn-success" disabled={props.isDisabled} >Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
	)
}

export default NewPlayList;