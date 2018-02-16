import React from 'react';
const apiCallers = require('./apiCallers');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    let username = this.state.term;
    apiCallers.aj.post('/repos', username, this.props.onSearch);
    console.log('The click handler(search) has been invoked');
    //try emptying the input filed after searching
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>       
      <button type = "button" onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;