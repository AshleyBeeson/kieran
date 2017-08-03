import React from 'react';
import BugStore from './store/BugStore';
import Sort from './Sort';
import {Link} from 'react-router';

export default class Header extends React.Component{
   constructor(props){
	   super(props);
	   //this.handleBugSort = this.handleBugSort.bind(this);
   }
   render(){
		return(
			<div className='mdl-layout ' style={{backgroundColor:'lightgrey', height:200}}>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<div className='mdl-grid'>
					<span className='mdl-cell--2-col'></span>
						<span className ='mdl-cell--2-col' >
							<img src= {"/bugTracker.jpg"} style={{height:80,width:80}} alt='logo img' />
						</span>
						<span className='mdl-cell--8-col'>
							<h2 style={{color:'white'}} ref='heading_title' >Bug Tracker</h2>
						</span>
						
					</div>
				</Link>
				<div className = 'mdl-grid'>
				{/*<div className = ''>Search Div</div>*/}
					
					<div className = 'sortDiv mdl-cell--14-col '>
						<Sort />
					</div>
					
				</div>
			</div>
		);
    }
	
	
}