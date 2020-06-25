import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DragonAvatar from './DragonAvatar';
import { BACKEND } from '../config';

class AccountDragonRow extends Component {
  state = {
    nickname: this.props.dragon.nickname,
    isPublic: this.props.dragon.isPublic,
    setValue: this.props.dragon.setValue,
    sireValue: this.props.dragon.sireValue,
    edit: false
  };

  updateNickname = event => {
    this.setState({
      nickname: event.target.value
    })
  }

  updateSetValue = event => {
    this.setState({ setValue: event.target.value })
  }

  updateSireValue = event => {
    this.setState({ sireValue: event.target.value })
  }

  updateIsPublic = event => {
    this.setState({ isPublic: event.target.checked })
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit})
  }

  save = () => {
    fetch(`${BACKEND.ADDRESS}/dragon/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dragonId: this.props.dragon.dragonId, 
        nickname: this.state.nickname,
        isPublic: this.state.isPublic,
        setValue: this.state.setValue,
        sireValue: this.state.sireValue
      })
    }).then(response => response.json())
      .then(json => {
        if(json.type === 'error') {
         alert(json.message);
        } else {
         this.toggleEdit();
        }
    })
    .catch(error => alert(error.message))
  }

  get SaveButton() {
    return <Button onClick={this.save}>Save</Button>
  }

  get EditButton() {
    return <Button onClick={this.toggleEdit}>Edit</Button>
  }

  render() {
    return (
      <div>
        <div>{this.props.dragon.nickname}</div>
        <input type="text" value={this.state.nickname} onChange={this.updateNickname} disabled={!this.state.edit} />
        <br />
        <DragonAvatar dragon={this.props.dragon} />
        <div>
          <span>
            Set Value: {' '}
            <input 
              type="number" 
              disabled={!this.state.edit} 
              value={this.state.setValue} 
              onChange={this.updateSetValue} 
              className="account-dragon-row-input"
            />  
          </span>{' '}
          <span>
            Sire Value: {' '}
            <input 
              type="number"
              disabled={!this.state.edit}
              value={this.state.sireValue}
              onChange={this.updateSireValue}
              className="account-dragon-row-input"
            />
          </span>{' '}
          <span>
            Public: {' '}
            <input 
              type="checkbox" 
              disabled={!this.state.edit} 
              value={this.state.isPublic}
              onChange={this.updateIsPublic}
            />  
          </span>
          { this.state.edit ? this.SaveButton : this.EditButton}
        </div>
      </div>
    )
  }
}

export default AccountDragonRow;