import React, { Component } from 'react';
// import { filter, contains } from 'ramda';
import logo from './fullOrange.png';
import './App.css';
import Card from './components/Card'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/fetchData');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };



  createData = () => {
    const { response, post } = this.state;
    let data = [];
    const filteredArr = response ? response.filter(d => d.name.first.includes(post)).slice(0, 10) : [];

    console.log(filteredArr);

    data = filteredArr.map((i, k) => (
      <Card key={k}
        className='card'
        name={i.name}
        phone={i.phone}
        picture={i.picture.thumbnail}
      />
    ));

    return data;

  }
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
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
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          {/* <button type="submit">Submit</button> */}
        </form>
        <p>{this.state.responseToPost}</p>
        {
          response ? this.createData() : <p>No results were found.</p>
        }
        <footer className="App-footer">AbsenceSoft Code Challange - 10/27/2020 - Created By Corey Anthony</footer>
      </div>
    );
  }
}

export default App;
