import React, { Component } from 'react';

import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Axios from 'axios';

export class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] }
    this.update = this.update.bind(this);
    console.log(props);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    Axios
      .get(`http://localhost:8080/api/v1/users`)
      .then(res => {
        this.setState({ rows: res.data })
      });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Edad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableContent;
