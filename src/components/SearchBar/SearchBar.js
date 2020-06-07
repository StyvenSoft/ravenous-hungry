import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

class SearchBar extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
        term: '',
        location: '',
        sortBy: 'best_match',
    };

    this.handleTermChange  = this.handleTermChange.bind(this);
    this.handleLocationChange  = this.handleLocationChange.bind(this);
 }

 handleTermChange(event) {
    this.setState({ term : event.target.value});
 }

 handleLocationChange(event) {
    this.setState({ location : event.target.value});
 }

 getSortbyClass(sortByOption) {
    if(sortByOption === this.state.sortBy) {
        return 'active';
    }
    return '';
 }

 handleSortByChange(sortByOption) {
    this.setState({ sortBy : sortByOption });
 }

 renderSortByOptions() {
     return Object.keys(sortByOptions).map(sortByOptions => {
        let sortByOptionsValue = sortByOptions[sortByOptions];
        return <li key={sortByOptionsValue} onClick={this.handleSortByChange.bind(this, sortByOptionsValue)} className={this.getSortbyClass(sortByOptionsValue)}>{sortByOptions}</li>
     });
 }   

 render() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                <input placeholder="Where?" onChange={this.handleLocationChange} />
            </div>
            <div className="SearchBar-submit">
                <a href="www.#.com">Let's Go</a>
            </div>
        </div>
    )
  }
}

export default SearchBar;