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

		this.state = {
			videos: [],
			selectedVideo: null
		};

	this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term:term}, (data) => {
			this.setState({
				videos:data,
				selectedVideo:data[0]});
		});
	}


	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));

//react has notion of DOWNWARD DATA FLOW
// most parent component makes the request for data and then passes it on to
// the children components