import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//for non libs, provide full path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCpMzQY8UMowONZ946qR0g6dakP0X2_4mk';

// //
// 	//same as const App = function() { }
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term:'surfboards'}, (data) => {
			this.setState({videos:data});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));

//react has notion of DOWNWARD DATA FLOW
// most parent component makes the request for data and then passes it on to
// the children components