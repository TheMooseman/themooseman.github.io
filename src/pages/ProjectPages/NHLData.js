import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
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
        <div >
          <h1>Teams of the NHL</h1>
          <table className='nhlTable'>
          <Scrollbars style={{ width: 500, height: 300, justifyContent: 'center', justifySelf: 'center' }}>
            <thead>
              <tr>
                <th> Team </th>
                <th> City </th>
                <th> Conference </th>
                <th> Timezone </th>
              </tr>
            </thead>
            <tbody>
              {
                 items.teams.map(row => ( 
                  <tr>
                    <td>{row.teamName}</td>
                    <td>{row.venue.city}</td>
                    <td>{row.division.name}</td>
                    <td>{row.venue.timeZone.offset + ' GMT'}</td>
                  </tr>
                 ))
              }
            </tbody>
            </Scrollbars>
          </table>
          
        </div>
      )
    }
  }
}