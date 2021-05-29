import React, { Component } from "react";
import { stock } from "../resources/stock2.js";
import styled from "styled-components";

class StockRow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  changeStyle() {
    return {
      color: this.state.dollar_change > 0 ? "green" : "red",
    };
  }

  applyData(data) {
    this.setState({
      data: data,
    });
  }

  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  render() {
    return (
      <StyledDiv>
        <button>X</button>
        <li className="list-group-item">
          <b>{this.props.ticker}</b> ${this.state.data.price}
          <span className="change" style={this.changeStyle()}>
            {this.state.dollar_change}
            {this.state.percent_change}
          </span>
        </li>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  background: white;
  border-radius: 15px;
  width: 200px;
  height: 100px;
  margin: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 0.4rem;
    border: none;
    background: red;
    color: white;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
      background: white;
      color: red;
      border: solid 1px red;
    }
  }
  li {
    list-style: none;
  }
`;

export default StockRow2;
