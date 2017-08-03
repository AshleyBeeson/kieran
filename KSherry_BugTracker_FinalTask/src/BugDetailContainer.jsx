import React from 'react';
import BugStore from './store/BugStore';
import BugDetails from './BugDetails';
import EditBugDetails from './EditBugDetails';

export default class BugDetailContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bugs:BugStore.getAllBugDetails(),
					}			
		this._dataload = this._dataload.bind(this);	
		
	}
	componentWillMount(){
		//sets a listener to know when to rerender
		BugStore.on('dataLoaded',this._dataload);	
		
	}
	componentDidMount(){
		BugStore.loadBugsFromApi();
	}
	componentWillUnmount() {
		//removes the listener when the component unmounts 
		BugStore.removeListener('dataLoaded',this._dataload);
    }
	_dataload(){
		//console.log("data loaded");
		this.setState({bugs: BugStore.getAllBugDetails()});
		
	}
		
	render(){
		let bugs = this.state.bugs;
		let i = (this.props.location.query.bugID)-1;
		
		//calls on the BugDetails component passing in all info as props
		return(
				<div>
					<BugDetails _id ={bugs[i]._id} severity={bugs[i].severity} highPriority={bugs[i].highPriority}
					id = {bugs[i].id} dateCreated={bugs[i].dateCreated} reporter={bugs[i].reporter} 
					assignedUser={bugs[i].assignedUser} status={bugs[i].status} summary={bugs[i].summary}
					actions={bugs[i].actions} description={bugs[i].description} />
				</div>
			);
	}
		
		
}
