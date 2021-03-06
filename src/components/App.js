import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/Fetch';
import Header from './Header';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import faces from '../images/faces.gif';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
    const localData = JSON.parse(localStorage.getItem('Local'))
    if (localData !== null) {
      this.setState({
        inputValue: localData
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('Info', JSON.stringify(this.state.inputValue))
  }


  handleInputValue(value) {
    this.setState({
      inputValue: value,
    })
  }

  setFilters() {
    const { data, inputValue } = this.state
    return data
      .filter(characterObj => inputValue === '' || characterObj.name.toLowerCase().includes(inputValue.toLowerCase()))
  }

  renderCharacterDetail(props) {
    const routeID = props.match.params.id;
    const allChars = this.state.data;
    const chars = allChars.find(char => char.id === parseInt(routeID))
    if (chars) {
      return <CharacterDetail characterObj={chars} />
    } else {
      return <div className="errorText">
        <p><span className="errorText--error">Wubba Lubba Dub Dub!!</span><br></br>You got yourself outta our database dimension.</p><img className="errorText--img" src={faces} alt="faces"></img>
      </div>;
    }

  }
  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters
              inputValue={inputValue}
              handleInputValue={this.handleInputValue}
            />
            <CharacterList
              charList={this.setFilters()}
              inputValue={inputValue}
            />
          </Route>
          <Route path="/details/:id" render={this.renderCharacterDetail}></Route>
        </Switch >
      </div >
    );
  }
}

export default App;