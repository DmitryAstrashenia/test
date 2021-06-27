"use scrict";

import React from "react";
import "./css/Card.css";

class Card extends React.Component {
  firstName = this.props.data.first_name;

  answerClicked = () => {
    this.props.deleteCard(this.props.id);
  };

  render() {
    return (
      <ul className="Card">
        <li>Имя: {this.firstName}</li>
        <li className="btnClose">
          <button onClick={this.answerClicked}>x</button>
        </li>
      </ul>
    );
  }
}

export default Card;
