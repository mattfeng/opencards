import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class CreateCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      front: "",
      back: "",
    };
  }

  handleFront = (event) => {
    this.setState({ front: event.target.value });
  };

  handleBack = (event) => {
    this.setState({ back: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>create cards</h1>

        {/* editor */}
        <div>
          <div>
            <h2>front</h2>
            <textarea
              onChange={(event) => this.handleFront(event)}
              rows={10}
              cols={80}
            ></textarea>
          </div>
          <div>
            <h2>back</h2>
            <textarea
              onChange={(event) => this.handleBack(event)}
              rows={10}
              cols={80}
            ></textarea>
          </div>
        </div>

        {/* preview */}
        <div>
          <div>
            <ReactMarkdown
              skipHtml={true}
              children={this.state.front}
              remarkPlugins={[]}
            />
          </div>
          <div>
            <ReactMarkdown
              skipHtml={true}
              children={this.state.back}
              remarkPlugins={[]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCards;
