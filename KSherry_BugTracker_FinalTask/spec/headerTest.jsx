//required imports
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
//import component to be tested
import Header from '../src/Header';

describe('header:', function(){
	
	//render the component to be tested
	var header = TestUtils.renderIntoDocument(
			<Header />
		);
		
		
		
	it('renders the title', function(){

		let reference = header.refs.heading_title;
		
		expect(ReactDOM.findDOMNode(reference).textContent).toEqual("Bug Tracker");
		
	});	
		
	
	
});