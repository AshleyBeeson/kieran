import { EventEmitter } from 'events';

import dispatcher from './dispatcher';

class BugStore extends EventEmitter{
	constructor(){
		super();
		this.bugDetails = [];
		this.filteredBugs =[];
		this.sortedBugs =this.bugDetails.slice();
	}
	loadBugsFromApi(){
		//allows use of .this in a function
		let bugStore =this;
		//empties data for reload
		this.bugDetails = [];
		fetch("/api/bugs").then(function(data){
			return data.json()
		}).then( json => {
			json.forEach((bug) =>{
				//console.log(bug);
				this.bugDetails.push(bug);
				
			});
			this.setInitialDependants();
			setTimeout(function(){bugStore.emit('dataLoaded');},10);
		});
	}
	setInitialDependants(){
		this.filteredBugs = this.bugDetails.slice();
	}
	getAllBugDetails(){
		return this.bugDetails;
	}
	getFilteredBugs(){
		return this.filteredBugs;
	}
	getSortedBugs(){
		return this.sortedBugs;
	}
	
	handleActions(action) {
		switch(action.type) {
			/*case "FILTER_SEARCH":
				this.filterMoviesBySearch(action.searchParameters);
			break;
			
			*/
			case "SORT_BUGS":
				this.sortBugs(action.sortType, action.sortOrder);
			default:
			break;
		}
	}
	
	filterBugs(filterBy){
		let filteredArray = [];
		switch(filterBy){
			case 'highPriority':
				let highPriorityArray = this.bugDetails.slice();
				filteredArray = [];
				for (let i=0; i<highPriorityArray.length; i++){
					if(highPriorityArray[i].highPriority == 'TRUE'){
						filteredArray.push(highPriorityArray[i])
					}
				}
				this.filteredBugs=filteredArray;
				this.emit('bugsSorted');
				break;
			case 'highSeverity':
				let highSeverityArray = this.bugDetails.slice();
				filteredArray = [];
				for (let i=0; i<highSeverityArray.length; i++){
					if(highSeverityArray[i].severity == 'HIGH'){
						filteredArray.push(highSeverityArray[i])
					}
				}
				this.filteredBugs=filteredArray;
				this.emit('bugsSorted');
				break;
			case 'mediumSeverity':
				let mediumSeverityArray = this.bugDetails.slice();
				filteredArray = [];
				for (let i=0; i<mediumSeverityArray.length; i++){
					if(mediumSeverityArray[i].severity == 'MEDIUM'){
						filteredArray.push(mediumSeverityArray[i])
					}
				}
				this.filteredBugs=filteredArray;
				this.emit('bugsSorted');
				break;
			case 'lowSeverity':
				let lowSeverityArray = this.bugDetails.slice();
				filteredArray = [];
				for (let i=0; i<lowSeverityArray.length; i++){
					if(lowSeverityArray[i].severity == 'LOW'){
						filteredArray.push(lowSeverityArray[i])
					}
				}
				this.filteredBugs=filteredArray;
				this.emit('bugsSorted');
				break;				
			case 'reset':
				filteredArray = this.bugDetails.slice();
				this.filteredBugs=filteredArray;
				this.emit('bugsSorted');
				break;
			default:
				break;
		}
	}
	
	sortBugs(type,order){
		let bugs = this.sortedBugs;
		switch(type){
			case "severity": 
				let highArray =[];
				let mediumArray = [];
				let lowArray=[];
				let combinedArray=[];
				for (let i=0; i<bugs.length;i++){
					switch(bugs[i].severity){
						case 'HIGH':highArray.push(bugs[i]);
						break;
						case 'MEDIUM':mediumArray.push(bugs[i]);
						break;
						case 'LOW':lowArray.push(bugs[i]);
						break;
					}
				}
				if(order== 'desc'){
					combinedArray.push(highArray).then(combinedArray.push(mediumArray).then(combinedArray.push(lowArray)));
					
				}
				else if(order== 'asc'){
					combinedArray.push(lowArray).then(combinedArray.push(mediumArray).then(combinedArray.push(highArray)));
				}
				this.sortedBugs = combinedArray;
			break;
			case "id":
			break;
			case "date":
			break;
			default:
			break;
		}
	}
}

const bugStore = new BugStore();
dispatcher.register(bugStore.handleActions.bind(bugStore));
export default bugStore;