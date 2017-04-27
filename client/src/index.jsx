import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [] };
    this.search = this.search.bind(this);

  }

  search (term) {
    var context = this;
    console.log(this)
    console.log(`${term} was searched`);
    $.post('/repos/import', { q: term })
     .then(function(something){
        console.log("after post", something)
        context.updateState();
      });
  }

  updateState () {
    console.log("UPDATING")
    var context = this;
    $.get('/repos').then(function(repos){

      console.log("receiving",repos);
      context.setState({ repos: repos });
      console.log("state updated to",context.state.repos );

    })

  }

  render () {
    console.log("RENDERING");

    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={ this.search }/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

