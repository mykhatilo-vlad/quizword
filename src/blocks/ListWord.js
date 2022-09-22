import React, { Component } from "react";
import "./ListWord.css";
import Card from "../cards/Card";
import CardForm from "../forms/CardForm";

const listWord = [
  {
    word: "just hung out",
    image:
      "https://thumbs.dreamstime.com/z/group-six-friends-hang-out-cafe-have-fun-together-114039459.jpg",
  },
  {
    word: "get up",
    image:
      "https://previews.123rf.com/images/hermandesign2015/hermandesign20151901/hermandesign2015190100359/116415018-a-boy-wake-up-and-stretching-in-morning.jpg",
  },
];

export default class ListWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "",
      words: this.getListWord(),
      newWord: "",
      newImage: "",
    };
  }

  getListWord = () => {
    return listWord.map((card, i) => {
      return (
        <Card
          key={i}
          index={i}
          word={card.word}
          image={card.image}
          editCard={this.editCard}
        />
      );
    });
  };

  editCard = (index, word, image) => {
    if (word) {
      listWord[index].word = word;
    }

    if (image) {
      listWord[index].image = image;
    }

    this.setState({ words: this.getListWord() });
  };

  addCard = (word, image) => {
    listWord.push({
      word: word,
      image: image,
    });

    this.setState({ words: this.getListWord(), form: "" });
  };

  render() {
    return (
      <div className="list-word-wrap">
        <ul className="list-word">{this.state.words}</ul>

        {this.state.form}

        <button
          className="add-item"
          onClick={() => {
            this.setState({ form: <CardForm formHandle={this.addCard} /> });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
