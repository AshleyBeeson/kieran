import React from 'react';
import {Link} from 'react-router';

export default class BugListing extends React.Component{
	constructor(props){
		super(props);
	}
	generateSeverityDiv(){
		if(this.props.severity.toString() == "LOW"){
			return (<div style={{backgroundColor:'green'}}>Severity: {this.props.severity}</div>);
		}
		else if(this.props.severity == "MEDIUM"){
			return (<div style={{backgroundColor:'yellow'}}>Severity: {this.props.severity}</div>);
		}
		else if(this.props.severity == "HIGH"){
		return(<div style={{backgroundColor:'red'}}>Severity: {this.props.severity}</div>);
		}
		else{return}
	}
	generateHighPriorityDiv(){
		if (this.props.highPriority == 'TRUE'){
			return(<div style={{backgroundColor:'red'}}>HIGH PRIORITY</div>)
		}
		else return;
	}
   render(){
	   let severityDiv = this.generateSeverityDiv();
	   let HPDiv = this.generateHighPriorityDiv();
			return(
				
				<div className = 'mdl-card mdl-grid mdl-grid--no-spacing ' style={{border: "1px solid lightgrey", width: 1000}}>
					<div className = 'mdl-cell mdl-cell--3-col'>		
						{HPDiv}
						{severityDiv}
						
					</div>
					<div className = 'mdl-cell mdl-cell--6-col mdl-grid'>
						<div className = 'upperInfo mdl-grid--no-spacing'>
							<div className='mdl-grid  mdl-cell--12-col'>
								<span className='mdl-cell--6-col ' style={{border:"1px solid lightgrey"}}>Bug ID: {this.props.id}</span> 
								<span  className='mdl-cell--6-col ' style={{border:"1px solid lightgrey"}}> Date: {this.props.dateCreated}</span>
							</div>
							
							<div className='mdl-grid  mdl-cell--12-col'>
								<span className='mdl-cell--6-col' style={{border:"1px solid lightgrey"}}>Reported by: {this.props.reporter}  </span>
								<span className='mdl-cell--6-col' style={{border:"1px solid lightgrey"}}>Assigned to: {this.props.assignedUser}</span>
							</div>
						</div>
						<div className = 'summary-lowerInfo mdl-card__supporting-text'>
							{this.props.summary}
						</div>
					</div>
					<div className='mdl-cell mdl-cell--3-col'>{this.props.status}</div>
					<div className='mdl-cell mdl-cell--4-col'></div>
					<div className='mdl-cell mdl-cell--4-col'>
					<Link to={{pathname:'BugDetailContainer',query:{bugID: this.props.id}}}><button>More Details</button></Link>
					</div>
				</div>
				
			);
    }
	
}