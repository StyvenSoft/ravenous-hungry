import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
      <h1>Ravenous Hungry</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
