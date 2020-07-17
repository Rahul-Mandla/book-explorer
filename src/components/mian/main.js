import React, { Component } from "react";
import { FormGroup, InputGroup, FormControl, Button } from "react-bootstrap";
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      data: []
    };
  }

  search() {
    const apiKey = "b558d23b03mshbfff1e033e320e8p1dc37cjsna4bedcbe1f19";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.query
    }&appid=${apiKey}`;
    fetch(url)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.query);
  }
  render() {
    return (
      <div>
        <div className="search m-5">
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                onChange={event => this.setState({ query: event.target.value })}
              />
              <Button onClick={() => this.search()} className="ml-5">
                Search
              </Button>
            </InputGroup>
          </FormGroup>
        </div>
      </div>
    );
  }
}
