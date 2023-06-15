import React, { Component } from "react";

import "../style/Tip.css";

interface State {
  compact: boolean;
  text: string;
  grade: string;
}

interface Props {
  onConfirm: (comment: { text: string; grade: string }) => void;
  onOpen: () => void;
  onUpdate?: () => void;
}

export class Tip extends Component<Props, State> {
  state: State = {
    compact: true,
    text: "",
    grade: "",
  };

  styled = {
    color: "black",
  };

  styledButton = {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  // for TipContainer
  componentDidUpdate(nextProps: Props, nextState: State) {
    const { onUpdate } = this.props;

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate();
    }
  }

  render() {
    const { onConfirm, onOpen } = this.props;
    const { compact, text, grade } = this.state;
    console.log("Tip.render");
    return (
      <div className="Tip">
        {compact ? (
          <div
            className="Tip__compact"
            onClick={() => {
              onOpen();
              this.setState({ compact: false });
            }}
          >
            Add grading
          </div>
        ) : (
          <form
            className="Tip__card"
            onSubmit={(event) => {
              event.preventDefault();
              onConfirm({ text, grade });
            }}
          >
            <div>
              <textarea
                placeholder="Your grading comment..."
                autoFocus
                value={text}
                onChange={(event) =>
                  this.setState({ text: event.target.value })
                }
                ref={(node) => {
                  if (node) {
                    node.focus();
                  }
                }}
              />
              <div>
                <p style={this.styled}>Grading:</p>
                {["1 point", "2 points"].map((_grade) => (
                  <label style={this.styled} key={_grade}>
                    <input
                      checked={grade === _grade}
                      type="radio"
                      name="grade"
                      value={_grade}
                      onChange={(event) =>
                        this.setState({ grade: event.target.value })
                      }
                    />
                    {_grade}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <input style={this.styledButton} type="submit" value="Save" />
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Tip;
