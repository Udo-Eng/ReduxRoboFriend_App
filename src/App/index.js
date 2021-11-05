import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './index.css';
import { robots } from '../robots';
import SearchBox, { FilteredRobotsArray } from '../Components/SearchBox';



//Setting the State of react applicatiion 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ' ',
    }
    this.onSearch = this.onSearch.bind(this);
  }



  onSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const { searchTerm } = this.state;
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
        <CardList robots={filteredrobots} />
      </div>
    )

  }

}

export default App;
