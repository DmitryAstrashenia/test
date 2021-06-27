"use scrict";

import React from "react";
import "./css/NewCard.css";

class NewCard extends React.Component {
  state = {
    data: this.props.data,
    name: null,
    disabled: "disabled",
  };

  validate = () => {
    let access = true;
    for (let key in this.state) {
      if (key === "data" || key === "disabled") {
      } else {
        let input = document.getElementById(`${key}`);
        if (!this.state[key]) {
          access = false;
          input.classList.remove("invisible");
        } else if (!input.classList.contains("invisible")) {
          input.classList.add("invisible");
        }
      }
    }
    if (access) {
      this.setState({
        disabled: null,
      });
    } else {
      this.setState({
        disabled: "disabled",
      });
    }
    return access;
  };

  answerName = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      this.validate
    );
  };

  answerNewCard = () => {
    let maxId = 0;
    this.state.data.forEach((e) => {
      if (e.id > maxId) {
        maxId = e.id;
      }
    });
    let id = ++maxId;

    if (!this.validate()) {
    } else {
      this.props.addCard(id, this.state.name);
    }
    this.props.edit(null, null);
  };

  answerСanceling = () => {
    this.props.edit(null, null);
  };

  render() {
    return (
      <ul className="NewCard">
        <li>
          <input type="text" defaultValue={null} onChange={this.answerName} />
          <span id="name" className="messageErr">
            Введите имя
          </span>
        </li>
        <li>
          <button
            id="addButton"
            className="newButton"
            disabled={this.state.disabled}
            onClick={this.answerNewCard}
          >
            {"Добавить"}
          </button>
          <button className="newButton" onClick={this.answerСanceling}>
            {"Закрыть"}
          </button>
        </li>
      </ul>
    );
  }
}

export default NewCard;
