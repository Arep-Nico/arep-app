import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Paper, TextField, Button } from '@material-ui/core';

export class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', lastName: '', age: '' }
  }

  paper = {
    marginTop: "2vh",
    padding: "2%"
  }

  input = {
    marginTop: 8,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 8
  }

  handleName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleLastName = (event) => {
    this.setState({ lastName: event.target.value });
  }

  handleAge = (event) => {
    this.setState({ age: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.name.length === 0)
      return;
    if (this.state.lastName.length === 0)
      return;
    if (this.state.age.length === 0)
      return;

    const user = {
      name: this.state.name,
      lastName: this.state.lastName,
      age: this.state.age
    };

    Axios
      .post(`http://localhost:8080/api/v1/users`, user)
      .then(res => {
        if (res.status === 200)
          this.setState({
            name: '',
            lastName: '',
            age: ''
          });
        this.props.update(true);
      });
  }

  render() {
    return (
      <Paper elevation={3} style={this.paper}>
        <TextField
          label="Nombre"
          value={this.state.name}
          onChange={this.handleName}
          style={this.input}
        />
        <TextField
          label="Apellido"
          value={this.state.lastName}
          onChange={this.handleLastName}
          style={this.input}
        />
        <TextField
          label="Edad"
          value={this.state.age}
          onChange={this.handleAge}
          type="number"
          style={this.input}
        />
        <Button
          variant="contained"
          color="secondary"
          style={{ height: 48, margin: 8 }}
          onClick={this.handleClick}
        >
          Save
        </Button>
      </Paper>
    );
  }
}

InputData.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number
}

export default InputData;
