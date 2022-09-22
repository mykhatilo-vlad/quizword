import React, { Component } from "react";
import "./CardForm.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word ? this.props.word : "",
      image: this.props.image ? this.props.image : "",
    };
  }

  render() {
    return (
      <form
        className="card-form"
        onSubmit={(ev) => {
          ev.preventDefault();
          this.props.formHandle(this.state.word, this.state.image);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            this.setState({ word: ev.target.value });
          }}
        />

        <input
          type="url"
          onChange={(ev) => {
            this.setState({ image: ev.target.value });
          }}
        />

        <button type="submit">Save</button>
      </form>
    );
  }
}
