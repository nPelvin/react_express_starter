import React, { Component } from "react";
import "./customers.css";

class QuotesRandom extends Component {
  constructor() {
    super();
    this.state = {
      quotesRandom: [],
    };
  }

  componentDidMount() {
    fetch("/api/quotesRandom")
      .then((res) => res.json())
      .then((quotesRandom) =>
        this.setState({ quotesRandom }, () =>
          console.log("QuotesRandom fetched...", quotesRandom)
        )
      );

  }


  render() {
    return (
      <div>
        <h2>Random Quote Generator</h2>
        <ul>
          <li>
            "{this.state.quotesRandom.quote}" - {this.state.quotesRandom.author}
          </li>
          <li>
            <button onClick={()=>{window.location.reload(false);}}>New Quote</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default QuotesRandom;
