import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './index.css';
import { robots } from '../robots';
import SearchBox from '../Components/SearchBox';
import Button from '../Components/Button';
import Scroll from '../Components/Scroll';



//Setting the State of react applicatiion 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' ',
      robots: robots,
      isLoading: false
    }
    this.onSearch = this.onSearch.bind(this);
    this.fetchMoreRobots = this.fetchMoreRobots.bind(this);
  }

  onSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  fetchMoreRobots() {
    const { robots } = this.state;
    this.setState({
      isLoading: true,
    })
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(results => {
      this.setState({
        robots: robots.concat(results),
        isLoading: false,
      })
    }).catch(err => {
      return (
        <div>
          <p>There was an Error while trying to load new Robots </p>
        </div>
      )
    })
  }

  render() {
    const { searchTerm, robots, isLoading } = this.state;
    const filteredrobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <div className="tc">
        <div >
          <h1>
            RoboFriends
          </h1>
          <SearchBox
            searchTerm={searchTerm}
            onSearch={this.onSearch}
          />
        </div>
        <Scroll className={'scrollValue'}>
          <CardList robots={filteredrobots} />
        </Scroll>
        {
          isLoading ? <div>
            <button className={'button'}>Loading ...</button></div> :
            <Button
              fetchMoreRobots={this.fetchMoreRobots}
            >Load more Robots</Button>
        }
      </div>
    )

  }

}

export default App;
