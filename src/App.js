// import { Component } from "react";

import { useState, useEffect } from "react";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

// Class Components

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFiled: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchFiled = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFiled };
//     });
//   };

//   render() {
//     const { monsters, searchFiled } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFiled);
//     });

//     return (
//       <div>
//         <h1 className="app__title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           type={"search"}
//           placeholder={"search monster"}
//           className={"monsters__search-box"}
//         />
//         <CardList monsters={filteredMonsters} />;
//       </div>
//     );
//   }
// }

// Function Component

const App = () => {
  const [searchFiled, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLowerCase();
    setSearchField(searchFiledString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchFiled);
  });

  return (
    <div>
      <h1 className="app__title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        type={"search"}
        placeholder={"search monster"}
        className={"monsters__search-box"}
      />
      <CardList monsters={filteredMonsters} />;
    </div>
  );
};

export default App;
