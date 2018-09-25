import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from 'components/List';
import Form from 'components/Form';

import {connect} from 'react-redux';
import {addArticle} from "../redux/articles";
import PropTypes from 'prop-types';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Articles</h1>
        </header>
        <p className="App-intro">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <List articles={this.props.articles} />
                </div>
                <div className="col-md-4 offset-md-1">
                    <Form addArticle={this.props.addArticle} />
                </div>
            </div>
        </p>
      </div>
    );
  }
}

App.propTypes = {
    articles: PropTypes.array,
    addArticle: PropTypes.func
};

const connectedState = state => ({
    articles: state.articles
});

const connectedActionCreators = {
    addArticle,
};

export default connect(connectedState,connectedActionCreators)(App);
