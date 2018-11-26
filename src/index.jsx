/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.clearScreen = this.clearScreen.bind(this);
    this.addNumberToScreen = this.addNumberToScreen.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.switchSign = this.switchSign.bind(this);
    this.performOperation = this.performOperation.bind(this);
    this.state = {
      screen: [],
      ans: undefined,
    };
  }
  clearScreen() {
    let { screen } = this.state;
    screen = [];
    this.setState({ screen });
  }

  addNumberToScreen(e) {
    e.preventDefault();
    const number = e.target.textContent;
    const { screen } = this.state;
    screen.push(number);
    this.setState({ screen });
  }

  addDecimal(e) {
    e.preventDefault();
    const decimal = '.';
    const { screen } = this.state;
    if (screen.includes(decimal)) {
      // do not insert another decimal
      return;
    }
    screen.push(decimal);
    this.setState({ screen });
  }

  switchSign(e) {
    e.preventDefault();
    const { screen } = this.state;
    if (screen[0] !== '-') {
      // screen has positive number
      if (screen[0] === '+') {
        screen.shift();
        screen.unshift('-');
        this.setState({ screen });
        return;
      }
      screen.unshift('-');
      this.setState({ screen });
      return;
    }
    // screen has negative number
    screen.shift();
    screen.unshift('+');
    this.setState({ screen });
  }

  performOperation(e) {
    let { ans, screen } = this.state;
    let currentValue;
    let newScreen;

    const operation = e.target.textContent;
    const [multiplication, division, subtraction, addition] = ['x', '/', '-', '+'];
    if (operation === multiplication) {
      if (ans === undefined) {
        // if no previous answer stored in calculator then store current number
        ans = Number(screen.join(''));
        screen = [];
        this.setState({ screen, ans });
        return;
      }
      debugger;
      // a previous answer is stored in the calculator
      // get current value on screen
      currentValue = Number(screen.join(''));
      // multiply current value by previouly stored answer and store new value
      currentValue *= ans;
      newScreen = [currentValue];
      ans = currentValue;
      this.setState({ screen: newScreen, ans });
      return;
    }
    if (operation === division) {
      if (ans === undefined) {
        // no previous answer stored in calculator
      }
    }
    if (operation === subtraction) {
      if (ans === undefined) {
        // no previous answer stored in calculator
      }
    }
    if (operation === addition) {
      if (ans === undefined) {
        // no previous answer stored in calculator
      }
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="calculator-container">
          <div className="screen">{this.state.screen}</div>
          <div className="row">
            <div
              id="button-all-clear"
              className="button light-gray"
              onClick={() => { this.clearScreen(); }}
            >
              AC
            </div>
            <div
              id="button-plus-minus"
              className="button light-gray"
              onClick={(e) => { this.switchSign(e); }}
            >
                +/-
            </div>
            <div
              id="button-percent"
              className="button light-gray"
            >
              %
            </div>
            <div
              id="button-divide"
              className="button orange"
              onClick={(e) => { this.performOperation(e); }}
            >
              /
            </div>
          </div>
          <div className="row">
            <div
              id="button-seven"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              7
            </div>
            <div
              id="button-eight"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              8
            </div>
            <div
              id="button-nine"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              9
            </div>
            <div
              id="button-multiply"
              className="button orange"
              onClick={(e) => { this.performOperation(e); }}
            >
              x
            </div>
          </div>
          <div className="row">
            <div
              id="button-four"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              4
            </div>
            <div
              id="button-five"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              5
            </div>
            <div
              id="button-six"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              6
            </div>
            <div
              id="button-subtract"
              className="button orange"
              onClick={(e) => { this.performOperation(e); }}
            >
              -
            </div>
          </div>
          <div className="row">
            <div
              id="button-one"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              1
            </div>
            <div
              id="button-two"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              2
            </div>
            <div
              id="button-three"
              className="button"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              3
            </div>
            <div
              id="button-add"
              className="button orange"
              onClick={(e) => { this.performOperation(e); }}
            >
              +
            </div>
          </div>
          <div className="row">
            <div
              id="button-zero"
              className="button doubleContainer"
              onClick={(e) => { this.addNumberToScreen(e); }}
            >
              0
            </div>
            <div
              id="button-decimal"
              className="button"
              onClick={(e) => { this.addDecimal(e); }}
            >
              .
            </div>
            <div
              id="button-equals"
              className="button orange"
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
