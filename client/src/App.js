import React, { Component } from 'react';
// import { filter, contains } from 'ramda';
import logo from './fullOrange.png';
import './App.css';
import Card from './components/Card'

class App extends Component {
  state = {
    response: '',
    search: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }
  
  // Call stubbed out API with the fetchData route to return a set of results.
  callApi = async () => {
    const response = await fetch('/fetchData');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  createData = () => {
    const { response, search } = this.state;
    let data = [];
    let filteredArr = response ? response.filter(d => d.name.last.includes(search)): [];
    filteredArr = filteredArr.concat(response.filter(d => d.email.includes(search))).slice(0, 10);

    if (search.length > 2 && filteredArr.length) {
      data = filteredArr.map((i, k) => (
        <Card key={k}
          className='card'
          name={i.name}
          phone={i.phone}
          picture={i.picture.thumbnail}
        />
      ));
    } else {
      data = <h2>No results were found.</h2>
    }

    return data;
  }
  
render() {
    const { response } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Search</strong>
          </p>
          <input
            type="text"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
        </form>
        {
          response ? this.createData() : <p>Fetching data.</p>
        }
        <footer className="App-footer">AbsenceSoft Code Challange - 10/27/2020 - Created By Corey Anthony</footer>
      </div>
    );
  }
}

export default App;
