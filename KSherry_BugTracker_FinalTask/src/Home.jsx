import React from 'react';
import BugListing from './BugListing';
import BugStore from './store/BugStore';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bugs:BugStore.getFilteredBugs()	
		}	
		this._onChange = this._onChange.bind(this);
		this._dataload = this._dataload.bind(this);	
	}
	
	
   render(){
	    var bugListings = [];
	   	bugListings = this.generateBugListings();
			return(
				
				<div className='mdl-layout__content'>
					<div className= 'mdl-grid'>
						<div className='mdl-cell mdl-cell--2-col'></div>
						<h3  className='mdl-cell mdl-cell--8-col' >List of bugs</h3>
						<div className='mdl-cell mdl-cell--2-col'></div>
					</div>	
					<div className='mdl-grid'>
						<div className='mdl-cell mdl-cell--2-col'></div>
						<div className='mdl-cell mdl-cell--8-col'>{bugListings}</div>
						<div className='mdl-cell mdl-cell--2-col'></div>
					</div>
				</div>
			);
    }
	componentWillMount(){
		BugStore.on('bugsSorted',this._onChange);
		BugStore.on('dataLoaded',this._dataload);
		BugStore.loadBugsFromApi();
		
	}
	componentDidMount(){
		this.setState({bugs: BugStore.getFilteredBugs()});
	}
	componentWillUnmount() {
		BugStore.removeListener('bugsSorted',this._onChange);
		BugStore.removeListener('dataLoaded',this._dataload);
    }
	_onChange() {	
		this.setState({bugs: BugStore.getFilteredBugs()});
	}
	_dataload(){
		
		//console.log("loading data");
		
		this.setState({bugs: BugStore.getFilteredBugs()});
		
		
	}
	generateBugListings(){
		let bugs = this.state.bugs;
		let componentArray = [];
		for(let i =0; i<bugs.length; i++){
			componentArray.push(
			<div key={i}>
				<BugListing severity={bugs[i].severity} highPriority={bugs[i].highPriority}
				id = {bugs[i].id} dateCreated={bugs[i].dateCreated} reporter={bugs[i].reporter} 
				assignedUser={bugs[i].assignedUser} status={bugs[i].status} summary={bugs[i].summary} />
				<br />
			</div>	
			);
			
		}
		return componentArray;
	}
}