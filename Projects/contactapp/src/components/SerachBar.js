// import React from "react";

// class SearchBar extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     getSearchText(e) {
//         const inputElement = document.getElementsByClassName('inputSearch');
//         console.log(this.props.inputElement.value);
//         // if(inputElement) {
//         //     console.log(e.target.value);
//         //     this.props.searchFilter(inputElement.value);
//         // }
//     }
    
//     render() {
//         return (
//             <div className="searchbar">
//                 <input name="searchText" placeholder="search contact" className="inputSearch"></input>
//                 <button className="searchBtn"
//                     onClick={(e)=>this.getSearchText(e)}>SEARCH</button>
//                 <button className="resetBtn"
//                     onClick={this.reset}>RESET</button>
//             </div>
//         )
//     }
// }
// export default SearchBar;