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
    this.search = this.search.bind(this);
    // this.get = this.get.bind(this);
  }
  
  
  search () {
    // console.log('in big search and about to summon a get on repos');
    let indexComponent = this;
    apiCallers.aj.get('/repos', (repos)=>{
      console.log('im in big search in the callback about to set state', repos);
      indexComponent.setState({repos:repos}); 
      // console.log('i just set the state');
    });
    

  }

  // get(repos) {
  //   this.setState({repos:repos});
  // }

  componentDidMount(){ //render the repos when the page has finished loading 
    // apiCallers.aj.get('/repos', (repos)=>{
    //   this.setState({repos:repos}); 
    // });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));