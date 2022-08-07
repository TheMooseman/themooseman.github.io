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
    return data.teams.filter(row => row.teamName.toLowerCase().indexOf(this.state.q) > -1)
  }

  render() {
    var { isLoaded, items, q } = this.state;
    if(!isLoaded) {
      return <div className='nhlDiv'> Loading... </div>;
    } else {
      return (
        <div className='nhlDiv'>
            <input 
            type='text' 
            defaultValue='Search' 
            value={q} 
            onChange={e => this.onChangeHandler(e)}
            />
          <DataTable
          tClassName={'nhlTable'} 
          data={this.search(items)} 
          tHeader='' 
          tHeads={['Team', 'City', 'Conference', 'Timezone']}
          />
        </div>
      )
    }
  }
}