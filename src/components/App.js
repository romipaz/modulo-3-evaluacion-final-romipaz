import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/Fetch';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
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
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(value) {
    this.setState({
      inputValue: value,
    })
  }

    renderCharacterDetail(props) {
      const routeID = props.match.params.id;
      const myData = this.state.data;
      for (let character of myData) {
        if (character.id === parseInt(routeID)) {
          return <CharacterDetail characterObj={character} />;
        }
      }
    }
  render() {
    const { data, inputValue } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Filters
              inputValue={inputValue}
              handleInputValue={this.handleInputValue}
            />
            <CharacterList
              dataList={data}
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