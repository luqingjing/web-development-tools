import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryList from "./CategoryList";
import InfoList from "./InfoList";

const categories = require('./categories.json');
const infos = require('./infos.json');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      categories: categories,
      infos: infos
    }
  }


  render() {
    return (
      <div className="container">
        <Navbar />
        <CategoryList categories={categories}/>
        <hr/>
        <InfoList infos={infos}/>
        <Footer />
      </div>
    )
  }
}

export default App;
