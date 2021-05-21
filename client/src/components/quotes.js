import React, { Component } from "react";
import "./customers.css";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    fetch("/api/quotes")
      .then((res) => res.json())
      .then((quotes) =>
        this.setState({ quotes }, () =>
          console.log("Quotes fetched...", quotes)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Quotes</h2>
        <ul>
          {this.state.quotes.map((x) => (
            <li key={x.quote}>
              "{x.quote}" - {x.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Quotes;
