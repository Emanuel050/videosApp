import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './componets/search_bar'
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_detail';
const API_KEY = 'AIzaSyCil-xrvOTPxvUv6j6ZBDwZ4CShZUDT6RQ';

//Create a new Component. This component should produce
//some HTML
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("surfboards");
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},400)
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

//Take this componets generated HTML and put it
//on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));