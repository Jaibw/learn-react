import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
      super(props);
      this.state = { term : 'Enter Search'};
      this.onTermSearchChange = props.onTermSearchChange
    }

    render () {
      return (
        <div>
        <input
        value={this.state.term}
        onClick={event => this.setState({term: ''}) }
        onChange={this.onInputChange.bind(this)} />
        Value: {this.state.term}
        <input onChange={(event) => console.log(event.target.value)} disabled="disabled"/>
        </div>
      );
    }

    onInputChange(event) {
      this.setState({
            term: event.target.value
        });
      this.onTermSearchChange(event.target.value);
      console.log(event.target.value);
    }
}

export default SearchBar;
