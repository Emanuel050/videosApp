import React from 'react';
import ReactDom from 'react-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Emanuel Cohen' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    //onChange={event => this.setState({ term: event.target.value })} />
                    onChange={event => this.onInputChange(event.target.value)} />
                    Value of the state: {this.state.term}
            </div>
        )
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;