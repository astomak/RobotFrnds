import React, { Component } from 'react';
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import ErrorBoundary from './ErrorBoundary'
import '../tailwind.output.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(usersData => this.setState({ users: usersData }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filterRobots = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div>
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList data={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div >
    );
  }

}

export default App;
