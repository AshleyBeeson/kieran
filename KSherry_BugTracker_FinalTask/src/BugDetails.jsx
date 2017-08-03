import React from 'react';
import BugStore from './store/BugStore'


export default class BugDetails extends React.Component{
	constructor(props){
		super(props);
		this.state={
			//each component has between 3&4 states
			//edit___ refers to what will be rendered 
			//the ___Value stores the props for use when updating
			//____EditImg changes the button image path depending on whether it is being updated
			//ChangeValues are used with the text editors when a blank canvas is wanted
			editSeverity:false,
			severityEditImg:'/toEdit.jpg',
			severityValue:this.props.severity,
			editHighPriority:false,
			highPriorityEditImg:'/toEdit.jpg',
			highPriorityValue:this.props.highPriority,
			editReporter:false,
			reporterEditImg:'/toEdit.jpg',
			reporterChangeValue:'',
			reporterValue:this.props.reporter,
			editAssignedUser:false,
			assignedUserEditImg:'/toEdit.jpg',
			assignedUserChangeValue:'',
			assignedUserValue:this.props.assignedUser,
			editDescription:false,
			descriptionEditImg:'/toEdit.jpg',
			descriptionChangeValue:'',
			descriptionValue:this.props.description,
			editStatus:false,
			statusEditImg:'/toEdit.jpg',
			statusValue:this.props.status
		}
		//binding the change handlers to the class as opposed to functions
		this.handleSeverityChange = this.handleSeverityChange.bind(this);
		this.handleHighPriorityChange = this.handleHighPriorityChange.bind(this);
		this.handleReporterChange = this.handleReporterChange.bind(this);
		this.handleAssignedUserChange = this.handleAssignedUserChange.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}
	//change handlers use the event to set the state to the changed value
	handleSeverityChange(event){
		this.setState({severityValue:  event.target.value});
	}
	handleHighPriorityChange(event){
		this.setState({highPriorityValue:  event.target.value});
	}
	handleReporterChange(event){
		this.setState({reporterChangeValue:  event.target.value});
		this.setState({reporterValue:  event.target.value});
	}
	handleDescriptionChange(event){
		this.setState({descriptionChangeValue: event.target.value});
		this.setState({descriptionValue:  event.target.value});
	}
	handleAssignedUserChange(event){
		this.setState({assignedUserChangeValue:  event.target.value});
		this.setState({assignedUserValue:  event.target.value});
	}
	handleStatusChange(event){
		this.setState({statusValue:  event.target.value});
	}
	
	//change functions reset the buttons and when required call the update function
	changeSeverity(){
		if(this.state.editSeverity==false){
			this.setState({editSeverity:true});
			this.setState({severityEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editSeverity:false});
			this.editABug();
			this.setState({severityEditImg:'/toEdit.jpg'});
		}
	}
	changeHighPriority(){
		if(this.state.editHighPriority==false){
			this.setState({editHighPriority:true});
			this.setState({highPriorityEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editHighPriority:false});
			this.editABug();
			this.setState({highPriorityEditImg:'/toEdit.jpg'});
		}
	}
	changeReporter(){
		if(this.state.editReporter==false){
			this.setState({editReporter:true});
			this.setState({reporterEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editReporter:false});
			this.editABug();	
			this.setState({reporterEditImg:'/toEdit.jpg'});
		}
	}
	changeAssignedUser(){
		if(this.state.editAssignedUser==false){
			this.setState({editAssignedUser:true});
			this.setState({assignedUserEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editAssignedUser:false});
			this.editABug();	
			this.setState({assignedUserEditImg:'/toEdit.jpg'});
		}
	}
	changeStatus(){
		if(this.state.editStatus==false){
			this.setState({editStatus:true});
			this.setState({statusEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editStatus:false});
			this.editABug();
			this.setState({statusEditImg:'/toEdit.jpg'});
		}
	}
	changeDescription(){
		if(this.state.editDescription==false){
			this.setState({editDescription:true});
			this.setState({descriptionEditImg:'/inEdit.jpg'});
		}
		else{
			this.setState({editDescription:false});
			this.editABug();
			this.setState({descriptionEditImg:'/toEdit.jpg'});
		}
	}
   //renders the component
   render(){
	    //generate the divs
		let actionsArray= this.generateActionsDivs();
		let severityDiv = this.generateSeverityDiv();
		let highPriorityDiv = this.generateHighPriorityDiv();
		let reporterDiv = this.generateReporterDiv();
		let assignedUserDiv = this.generateAssignedUserDiv();
		let statusDiv= this.generateStatusDiv();
		let descriptionDiv = this.generateDescriptionDiv();
			
		return(
			<div className='mdl-grid'>
				<div className="mdl-cell mdl-cell--2-col"></div>
				<div className="mdl-cell mdl-cell--8-col">
					{/* for each div there is an image of a pencil that on click enables editing*/}
					<div>{severityDiv}  <input type='image'  onClick={this.changeSeverity.bind(this)} style={{height:20, width:20}} src={this.state.severityEditImg}/></div>
					<div>{highPriorityDiv}   <input type='image' onClick={this.changeHighPriority.bind(this)} style={{height:20, width:20}} src={this.state.highPriorityEditImg}/></div>
					<div>
						<div className = 'upperInfo'>
							<br />
							<div>Bug ID: {this.props.id}</div>
							<div>Date: {this.props.dateCreated}</div>
							<div>{reporterDiv}   <input type='image' onClick={this.changeReporter.bind(this)} style={{height:20, width:20}} src={this.state.reporterEditImg}/></div>
							<div>{assignedUserDiv}   <input type='image' onClick={this.changeAssignedUser.bind(this)} style={{height:20, width:20}} src={this.state.assignedUserEditImg}/></div>
						</div>
						<div className = 'details'>
							{descriptionDiv}   <input type='image'  onClick={this.changeDescription.bind(this)} style={{height:20, width:20}} src={this.state.descriptionEditImg}/>
						</div>
						<div>{statusDiv}   <input type='image' onClick={this.changeStatus.bind(this)} style={{height:20, width:20}} src={this.state.statusEditImg}/></div>
						<div className = 'actions'>
							<h5> - Actions Tracker - </h5>
							<h6>Actions Taken On This Bug</h6>
							{actionsArray}
						</div>
					</div>
				</div>	
			</div>
		);
		
    }
	
	//code to generate divs(now all spans but they go in divs) for each of the editable components
	//each component has two 'states' based on the state edit'Component' 
	// if false the render displays the information received from props
	// if true it displays a method to edit the information
	generateDescriptionDiv(){
		if(this.state.editDescription==false){
			return(<span >Description: {this.state.descriptionValue}</span>);
		}
		else{
			return(
				<span>Description:
					<div>
					<textarea style={{height:200, width:600}}value={this.state.descriptionChangeValue} onChange={this.handleDescriptionChange} />
					</div>
				</span>
			);
		}
	}
	generateStatusDiv(){
		if(this.state.editStatus==false){
			return(<span >Status: {this.state.statusValue}</span>)
		}
		else{
			return(
				<span>Status: 
				<select name="status" defaultValue = {this.state.statusValue} onChange={this.handleStatusChange}>
					<option value="TO DO">TO DO</option>
					<option value="IN PROGRESS">IN PROGRESS</option>
					<option value="IN REVIEW">IN REVIEW</option>
					<option value="IN TEST">IN TEST</option>
					<option value="IN DEMO">IN DEMO</option>
					<option value="DONE">DONE</option>
				</select>
				</span>
			);
		}
	}
	generateAssignedUserDiv(){
		if(this.state.editAssignedUser==false){
			return(<span>Assigned To: {this.state.assignedUserValue}</span>)
		}
		else{
			return(<span>Assigned To: <input type="text" value={this.state.assignedUserChangeValue} onChange={this.handleAssignedUserChange} /> </span>);
		}
	}
	generateReporterDiv(){
		if(this.state.editReporter==false){
			return(<span>Reporter: {this.state.reporterValue}</span>)
		}
		else{
			return(<span>Reporter: <input type="text" value={this.state.reporterChangeValue} onChange={this.handleReporterChange} /></span>);
		}
	}
	generateHighPriorityDiv(){
		if(this.state.editHighPriority==false){
			if (this.state.highPriorityValue == 'TRUE'){
				return(<span style={{backgroundColor:'red'}}>High Priority: TRUE</span>)
			}
			else return (<span style={{backgroundColor:'white'}}>High Priority: FALSE</span>);
		}
		else{
			return(
				<select name="highPriority" defaultValue = {this.state.highPriorityValue} onChange={this.handleHighPriorityChange}>
					<option value="TRUE">High Priority: TRUE</option>
					<option value="FALSE">High Priority: FALSE</option>
				</select>
			);
		}
	}
	generateSeverityDiv(){
		if (this.state.editSeverity == false){
			if(this.state.severityValue == "LOW"){
				return (<span style={{backgroundColor:'green'}}>Severity: {this.state.severityValue}</span>);
			}
			else if(this.state.severityValue == "MEDIUM"){
				return (<span style={{backgroundColor:'yellow'}}>Severity: {this.state.severityValue}</span>);
			}
			else if(this.state.severityValue == "HIGH"){
			return(<span style={{backgroundColor:'red'}}>Severity: {this.state.severityValue}</span>);
			}
			else{return}
		}
		else{
			return(
			
				<select name="severity" defaultValue = {this.state.severityValue} onChange={this.handleSeverityChange}>
					<option value="HIGH">Severity: HIGH</option>
					<option value="MEDIUM">Severity: MEDIUM</option>
					<option value="LOW">Severity: LOW</option>
				</select>
				
			);
		}
	}	
	generateActionsDivs(){
		let actions = this.props.actions;
		let returnArrayDivs = [];
		for(let i=0; i<actions.length; i++){
			returnArrayDivs.push(
				<div key ={i} >
					<div><h7>User: {actions[i].user}</h7> </div>
					<div><h7>Date: {actions[i].dateCreated}</h7></div>
					<p>{actions[i].action}</p>
				</div>
			)
		}
		return returnArrayDivs;
	}
	//function to send an update to the database with a put query
	//uses state to set all the updates
	editABug(){
		let _id = this.props._id;
		
		let id = this.props.id;
		let severity = this.state.severityValue;
		let	highPriority= this.state.highPriorityValue;
		let	dateCreated= this.props.dateCreated;
		let	reporter= this.state.reporterValue;
		let	assignedUser= this.state.assignedUserValue;
		let	description= this.state.descriptionValue;
		let	status= this.state.statusValue;
		let summary = this.props.summary;
		let fetchPath = ("api/bugs/"+ _id);
		
		fetch(fetchPath,{
			method:"PUT",
			headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body:JSON.stringify({
				_id:_id,
				id :id,
			severity :severity,
			highPriority:highPriority,
			dateCreated:dateCreated,
			reporter:reporter,
			assignedUser:assignedUser,
			description:description,
			status:status,
			summary:summary,
			})
		}).then((res) => {
			console.log("update Successful: ", res);
		});
	}
}