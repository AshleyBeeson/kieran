import React from 'react';
import Header from './Header';
import BugStore from './store/BugStore';

export default class App extends React.Component{
   render(){
			return(
				<div>
					<Header />
					<div id="domMain">
						<main>{this.props.children}</main>
					</div>
				</div>
			);
    }
	
}
