import React, { Component } from 'react';

//functional vs class based component
// this component might need to tell other components what the user typed
// in the search bar. so make this a class component.
// class component is one that has internal book-keeping, its aware of its state

class SearchBar extends Component {

	constructor(props) {
		super(props);
		//always need super

		this.state = { term: '' };
	}

	//must have a render method
	//for  a normal js class render: function(){}. but here its a bit diff
	//must return some jsx

	//to acess any js variables wrap in  {}
	// to handle events 1.write eventhandler 2.tell ur elem to run it

	//for a controlled component, the value the component shows comes from it
	// its state
	// when setState is called, the component re-renders thats when it gets
	// the new state and shows the new state as value of component
	render() {
		return (
			<div>
				<input
					value = {this.state.term}
					onChange={(event) => this.setState({ term: event.target.value })} />
			</div>
		);
	}

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;