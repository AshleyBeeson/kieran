import React from 'react';
import BugStore from './store/BugStore';

export default class Sort extends React.Component{
   constructor(props){
	   super(props);
	   
   }
   handleHighPriorityFilter(){
	 BugStore.filterBugs('highPriority'); 
	 //console.log('hp filter');
   }
   handleResetFilter(){
	    BugStore.filterBugs('reset'); 
	// console.log('reset filter');
   }
   handleHighSeverityFilter(){
	   BugStore.filterBugs('highSeverity');
   }
   handleMediumSeverityFilter(){
	   BugStore.filterBugs('mediumSeverity');
   }
   handleLowSeverityFilter(){
	   BugStore.filterBugs('lowSeverity');
   }
   render(){
		return(
			<div >
				<button onClick={this.handleHighPriorityFilter.bind(this)}>View High Priority</button>
				<button onClick={this.handleHighSeverityFilter.bind(this)}>View High Severity</button>
				<button onClick={this.handleMediumSeverityFilter.bind(this)}>View Medium Severity</button>
				<button onClick={this.handleLowSeverityFilter.bind(this)}>View Low Severity</button>
				<button onClick={this.handleResetFilter.bind(this)}>Reset Filters</button>
			</div>
		);
    }
	
	
}