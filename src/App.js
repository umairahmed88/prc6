import React, { Component } from 'react';

import './App.css';

import { CardList } from './components/cards/card.component'

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      prc6: [],
      serachField: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ prc6:users }))
  }

  onSearchChange = event => {
    this.setState({serachField: event.target.value})
  }

  render() {
    const { prc6, serachField } = this.state;
    const filteredPrc6 = prc6.filter(prc => prc.name.toLowerCase().includes(serachField.toLocaleLowerCase()))

    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange={this.onSearchChange} />
      <CardList prc6={filteredPrc6} />
    </div>
    );
  }
}

export default App;
