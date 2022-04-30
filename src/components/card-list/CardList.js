// import { Component } from "react";
import "./cardList.style.css";
import Card from "../card/Card";

// Class Component

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card__list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// Functional Component

const CardList = ({ monsters }) => {
  return (
    <div className="card__list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
