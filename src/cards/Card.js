import React, { Component } from "react";
import "./Card.css";
import CardForm from "../forms/CardForm";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      form: "",
    };
  }

  formHandle = (word, image) => {
    this.props.editCard(this.props.index, word, image);
  };

  render() {
    return (
      <div className={`word-card ${this.state.class}`}>
        {this.state.form}
        <div className="word-card__buttons">
          <button
            className="word-card__edit"
            onClick={() => {
              this.setState({
                form: (
                  <CardForm
                    word={this.props.word}
                    image={this.props.image}
                    formHandle={this.formHandle}
                  />
                ),
              });
            }}
          >
            Edit
          </button>
        </div>

        <div className="word-card__word">
          <span>{this.props.word}</span>
        </div>

        <div className="word-card__image">
          <img width="500" src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
