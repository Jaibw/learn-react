import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/videos_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'YOUR_YOUTUBE_KEY';



const App = function () {
	return  (
		<div>
				<SearchBar />
		</div>
	);
}

class App1 extends React.Component {
 constructor(props) {

	 super(props);
	 this.state = {
		 videos: [],
		 selectedVideo: "undefined"
	 };
	 // YTSearch({key: API_KEY, term: 'running'}, (videos) => {
		// 	this.setState({videos:videos, selectedVideo:videos[0] });
		// });

		this.videoSearch('swimming');


 }

 videoSearch = (term) => {

	 YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({videos:videos, selectedVideo:videos[0] });
		});
 }


updateVideo = (v1) => {
	console.log(v1);
	console.log(this.state.selectedVideo);
	const tt1 = this.state.videos;
	const vv1 = v1;
	this.setState({videos:tt1, selectedVideo:v1 });

}

	render () {

		const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300 );

		return (
		<div>
			<SearchBar onTermSearchChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect={this.updateVideo}
				videos={this.state.videos}  />
		</div>
	);
	}
}


ReactDOM.render(<App1/>, document.querySelector('.container'));
