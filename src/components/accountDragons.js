import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountDragons } from '../actions/accountDragons';
import AccountDragonRow from './AccountDragonRow';

class AccountDragons extends Component {
  componentDidMount() {
    this.props.fetchAccountDragons();
  }
  
  render(){
    return (
      <div>
        <h3>AccountDragons</h3>
        {
          this.props.accountDragons.dragons.map(dragon => {
            return (
              <div key={dragon.dragonId}>
                <AccountDragonRow dragon={dragon} />
                <hr></hr>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default connect(({ accountDragons }) => ({ accountDragons }),{fetchAccountDragons})(AccountDragons);