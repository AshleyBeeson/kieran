import React from 'react';


export default class BugDetails extends React.Component{
	constructor(props){
		super(props);
	}
   render(){
	   	return(
				<div>
				
					<p>Severity</p>
					<input type="text" placeholder={this.props.severity}></input>
					<p>Is it High Priority?</p>
					<input type="text" placeholder={this.props.highPriority}></input>
					
					<div>
						<div className = 'upperInfo'>
							<p>Bug ID: </p>
							<input type="text" value={this.props.id}></input>
							
							<p>Date: </p>
							<input type="text" placeholder={this.props.dateCreated}></input>
							
							
							<p>Reporter: </p>
							<input type="text" placeholder={this.props.reporter}></input>
							
							<p>Assigned to: </p>
							<input type="text" placeholder={this.props.assignedUser}></input>
							
						</div>
						<div className = 'details'>
							<p>Description</p>
							<textarea rows="10" cols="30" placeholder={this.props.description}></textarea>
						</div>
					</div>
					<div>
						<p>Status: ()</p>
						<input type="text" placeholder={this.props.status}></input>
					</div>
				
				
				</div>
			);
    }
}