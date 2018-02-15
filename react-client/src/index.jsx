import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import apiCallers from './components/apiCallers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }
  
  
  search (term) {
    // TODO
    console.log('search is called');
    
  }

  componentDidMount(){ //render the repos when the page has finished loading 
    apiCallers.aj.get('/repos', (repos)=>{
      this.setState({repos:repos}); 
    });
    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));