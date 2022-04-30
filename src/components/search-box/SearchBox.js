// import { Component } from "react";
import "./searchBox.style.css";

// Class Component

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className, type } = this.props;
//     return (
//       <input
//         className={`search__box ${className}`}
//         type={type}
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

// Functional Component

const SearchBox = ({ onChangeHandler, placeholder, className, type }) => {
  return (
    <input
      className={`search__box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
