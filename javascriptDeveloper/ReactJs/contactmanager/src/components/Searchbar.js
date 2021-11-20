import React, { Component } from 'react';
import "../index.css";

class Searchbar extends Component {
    constructor (props) {
        super(props);
        this.getSearchText = this.getSearchText.bind(this);
        this.reset = this.reset.bind(this);
    }
    getSearchText(e) {
        const inputEle = document.getElementsByClassName('inputSearch')[0];
        if(inputEle) {
            this.props.onSearch(inputEle.value);
        }
    }
    reset() {
        document.getElementsByClassName('inputSearch')[0].value = '';
        this.props.onSearch();
    }
    render() {
        return (
            <div className="searchbar">
                <input name="searchText" placeholder="search contact" className="inputSearch"></input>
                <button className="searchBtn" onClick={this.getSearchText}>SEARCH</button>
                <button className="resetBtn" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}

export default Searchbar;