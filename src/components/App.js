import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
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

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue,
    })
  }

    renderCharacterDetail(props) {
      const routeID = props.match.params.id;
      const data = this.state.data;
      console.log(data);
  
      for (let dataItem of data) {
        if (dataItem.id === parseInt(routeID)) {
          return <CharacterDetail characterObj={dataItem} />;
        }
      }
    }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Filters
              value={this.state.value}
              handleInputValue={this.handleInputValue}
            />
            <CharacterList
              data={this.state.data}
              inputValue={this.state.value}
            />
          </Route>
          <Route path="/detail/:id" render={this.renderCharacterDetail}></Route>
        </Switch >
      </div >
    );
  }
}

export default App;