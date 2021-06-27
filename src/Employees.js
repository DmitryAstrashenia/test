"use scrict";

import React from "react";
import { default as isoFetch } from "isomorphic-fetch";
import Card from "./Card";
import Ups from "./Ups";
import NewCard from "./NewCard";
import "./css/Employees.css";

class Employees extends React.Component {
  state = {
    data: null,
    error: null,
    display: null,
    newProduct: null,
    disabledProduct: null,
    markedProductCode: null,
    viewProduct: null,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    isoFetch(this.props.link)
      .then((data) => {
        if (data.status !== 200) {
          console.log("Что - то пошло не так: " + data.status);
          return;
        }
        data.json().then((data) => {
          this.setState({
            data: data.data,
          });
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
        console.error("Ошибка! Причина: " + error);
      });
  };

  deleteCard = (code) => {
    let newData = [];
    this.state.data.forEach((e) => {
      if (Number(e.id) !== Number(code)) {
        newData.push(e);
      }
    });
    this.setState({
      data: newData,
    });
  };

  cleanCard = () => {
    this.setState({
      newProduct: true,
      disabledProduct: "disabled",
      markedProductCode: null,
      display: "none",
    });
  };

  addCard = (id, name) => {
    let newData = this.state.data;
    let newCard = { id: id, first_name: name };
    newData.push(newCard);
    this.setState({
      data: newData,
    });
  };

  edit = (code, status) => {
    this.setState({
      editProduct: code,
      disabledProduct: status,
      newProduct: null,
      display: null,
    });
  };

  render() {
    if (!this.state.data && !this.state.error) {
      return (
        <div>
          <img src="./img/Spinner.svg" alt="loading" className="loading" />
        </div>
      );
    }
    if (this.state.error) {
      return <Ups />;
    }

    let names = this.state.data.map((element) => {
      return (
        <Card
          key={element.id}
          id={element.id}
          data={element}
          deleteCard={this.deleteCard}
        />
      );
    });

    let newCard = this.state.newProduct ? (
      <NewCard data={this.state.data} edit={this.edit} addCard={this.addCard} />
    ) : null;

    return this.state.newProduct ? (
      <div className="wrapper">
        {names}
        <div className="addNewUser">
          <div className="enterNewCard"> {newCard} </div>
        </div>
      </div>
    ) : (
      <div className="wrapper">
        {names}
        <div className="addNewUser">
          <button
            className="btnAddNewUser"
            id="add"
            style={{ display: this.state.display }}
            onClick={this.cleanCard}
          >
            Добавить нового сотрудника
          </button>
        </div>
      </div>
    );
  }
}

export default Employees;
