import React, { Component } from 'react';
import DataTable from '../../components/DataTable';
import '../../styles/NHLData.css';
const NHLApi = 'https://statsapi.web.nhl.com/api/v1/teams';

export default class NHLData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      q: '',
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

  onChangeHandler(e) {
    this.setState({
      q: e.target.value,
    })
  }

  search(data) {
    
    let filteredData = data.teams.filter(row => {
      return (
      row.teamName.toLowerCase().indexOf(this.state.q) > -1 ||
      row.venue.city.toLowerCase().indexOf(this.state.q) > -1 ||
      row.division.name.toLowerCase().indexOf(this.state.q) > -1
      );
    })
    filteredData = this.prepareData(filteredData);
    return filteredData;
  }

  prepareData(data) {
    this.teamNames = [];
    this.teamDivs = [];
    this.teamVenues = [];
    this.teamTimes = [];
    let i = 0;
    let retData = [];
    while(data.length > i) {
      let team = data[i];
      retData.push([
        team.teamName,
        team.venue.city,
        team.division.name,
        team.venue.timeZone.offset + " GMT"
      ])
      i++;
      }
    return(retData);
  }
  

  render() {
    var { isLoaded, items, q, dataKeys } = this.state;
    if(!isLoaded) {
      return <div className='nhlDiv'> Loading... </div>;
    } else {
      return (
        <div className='nhlDiv'>
          <h2 className='nhlH2'> Hockey Teams </h2>
            <input 
            type='text'
            className='searchFilter'
            placeholder='Search' 
            value={q} 
            onChange={e => this.onChangeHandler(e)}
            />
          <DataTable
          tDivClass={'nhlTableDiv'}
          tTableClass={'nhlTable'}
          data={this.search(items)} 
          tHeader=''
          tHeads={['Team', 'City', 'Conference', 'Timezone']}
          />
        </div>
      )
    }
  }
}