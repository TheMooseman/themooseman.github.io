import React, { Component } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import '../../styles/NHLData.css';
const NHLApi = 'https://statsapi.web.nhl.com/api/v1/teams';

export default class NHLData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch(NHLApi)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  
  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div> Loading... </div>;
    } else {
      return (
        <div className='nhldata'>
        <TableContainer component={Paper} sx={{ eight: '100px', maxWidth: '100px' }}>
          <Table aria-label='simple table' stickyHeader sx={{ height: 'max-content', backgroundColor: 'yellow' }}>
            <TableHead>
              <TableRow style={{ backgroundColor: 'grey'}}>
                <TableCell style={{ font: 'bold'}}> Team </TableCell>
                <TableCell> City </TableCell>
                <TableCell> Conference </TableCell>
                <TableCell> Timezone </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  items.teams.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.teamName}</TableCell>
                      <TableCell>{row.venue.city}</TableCell>
                      <TableCell>{row.division.name}</TableCell>
                      <TableCell>{row.venue.timeZone.offset + ' GMT'}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            
          </Table>
        </TableContainer>
        </div>
      )
    }
  }
}