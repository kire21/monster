// import { Component } from "react";
import "./card.style.css";

// // Class Component

// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card__container" key={id}>
//         <img
//           alt={name}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// Functional Component

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card__container" key={id}>
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
