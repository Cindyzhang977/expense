import React from 'react';
import "./views/profile.css";
import PopUp from "./popup.js";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: 'First',
      lastname: 'Last',
      email: 'email@email.com',
      username: 'username',
      password: 'password',
    };
  }

  updateProfileInfo(infoList) {
    this.setState({firstname: infoList[0]});
    this.setState({lastname: infoList[1]});
    this.setState({email: infoList[2]});
    this.setState({username: infoList[3]});
  }

  updatePassword(newPassword) {
    this.setState({password: newPassword});
  }

  render() {
    return (
      <div>
        <div className="content">
            <h1>Profile Basic Information</h1>
        </div>
        <ChangeProfileInfo
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          email={this.state.email}
          username={this.state.username}
          updateProfileInfo={this.updateProfileInfo.bind(this)}
        />
        <div className="content">
            <h1>Reset Password</h1>
        </div>
        <ResetPassword
          password={this.state.password}
          updatePassword={this.updatePassword.bind(this)}
        />
      </div>
    );
  }
}

function ProfileInfo(props) {
  return (
    <div>
      <p className="non-input">{props.firstname}</p>
      <p className="non-input">{props.lastname}</p>
      <p className="non-input">{props.email}</p>
      <p className="non-input">{props.username}</p>
    </div>
  )
}

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      username: this.props.username,
    };
  }

  onFirstnameChange(e) {
    this.setState({firstname: e.target.value});
  }

  onLastnameChange(e) {
    this.setState({lastname: e.target.value});
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit() {
    this.props.updateProfileInfo([this.state.firstname, this.state.lastname, this.state.email, this.state.username]);
    this.props.toInfo();
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstname" value={this.state.firstname} onChange={this.onFirstnameChange.bind(this)} className="input"/><br />
          <input type="text" value={this.state.lastname} onChange={this.onLastnameChange.bind(this)} className="input"/><br />
          <input type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="input"/><br />
          <input type="text" value={this.state.username} onChange={this.onUsernameChange.bind(this)} className="input"/><br />
        </form>
        <div className="edit-buttons" id="profile-form-edit-buttons">
          <button className="button" id="cancel" onClick={this.props.toInfo}>Cancel</button> <br />
          <button className="button edit" id="profile-edit" onClick={this.handleSubmit.bind(this)}>Edit</button>
        </div>
      </div>
    );
  }
}

class ChangeProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    }
  }

  toEdit() {
    this.setState({isEdit: true});
    document.getElementById('cancel').style.display = "block";
    document.getElementById('to-edit').style.display = "none";
  }

  toInfo() {
    this.setState({isEdit: false});
    document.getElementById('cancel').style.display = "none";
    document.getElementById('to-edit').style.display = "block";
  }

  render() {
    var toRender = <ProfileInfo
                        firstname={this.props.firstname}
                        lastname={this.props.lastname}
                        email={this.props.email}
                        username={this.props.username}
                      />
    if (this.state.isEdit) {
      toRender = <ProfileForm
                    firstname={this.props.firstname}
                    lastname={this.props.lastname}
                    email={this.props.email}
                    username={this.props.username}
                    updateProfileInfo={this.props.updateProfileInfo}
                    toInfo={this.toInfo.bind(this)} //delete
                  />
    }

    return (
      <div className="profile-info form-container content" id="profile-info-section">
        <div className="info">
          <div>
            <p><strong>First Name:</strong></p>
            <p><strong>Last Name:</strong></p>
            <p><strong>Email:</strong></p>
            <p><strong>Username:</strong></p>
          </div>
          {toRender}
        </div>
        <div className="edit-buttons">
          <button className="button edit" id="to-edit" onClick={this.toEdit.bind(this)}>Edit Profile Info</button>
        </div>
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.togglePopUp.bind(this);
    this.state = {
      oldpass: "",
      newpass: "",
      passwordsMatch: false,
      resetSuccessful: false,
      showPopUp: false,
    }
  }

  componentDidMount() {
    this.setState({showPopUp: false});
  }

  onOldPassChange(e) {
    this.setState({oldpass: e.target.value});
  }

  onNewPassChange(e) {
    this.setState({newpass: e.target.value});
  }

  onPasswordConfirm(e) {
    var match = document.getElementById("password-confirm");
    var text = document.getElementById("password-text");
    if (e.target.value !== this.state.newpass) {
      match.style.border = "1px solid #f03737";
      text.style.display = "block";
      this.setState({passwordsMatch: false});
    } else {
      match.style.border = "solid 1px #cccccc";
      text.style.display = "none";
      this.setState({passwordsMatch: true});
    }
  }

  reset(event) {
    event.preventDefault();
    if (this.state.passwordsMatch && this.state.oldpass === this.props.password) {
      this.setState({resetSuccessful: true});
      this.props.updatePassword(this.state.newpass);
    } else {
      this.setState({resetSuccessful: false});
    }
    document.getElementById('change-pass-form').reset();
    this.togglePopUp();
  }

  cancelReset(event) {
    event.preventDefault();
    this.setState({oldpass: "", newpass: "", passwordsMatch: false, showPopUp: false});
    document.getElementById('change-pass-form').reset();
  }

  togglePopUp() {
    this.setState({showPopUp: !this.state.showPopUp});
  }

  render() {
    try {
      const popup = document.getElementById('popup');
      if (this.state.showPopUp) {
          popup.style.display = "block";
      } else {
        popup.style.display = "none";
      }
    } catch {
      //do nothing
    }

    return (
      <div>
        <form className="form-container" id="change-pass-form">
          <div>
              Old Password: <br />
              <input type="password" name="old-password" onChange={this.onOldPassChange.bind(this)} /><br />
              New Password: <br />
              <input type="password" name="new-password" onChange={this.onNewPassChange.bind(this)} /><br />
              Confirm New Password: <br />
              <input type="password" id="password-confirm" onChange={this.onPasswordConfirm.bind(this)} /> <br />
              <p id="password-text">* Passwords must match *</p>
            </div>
            <div className="edit-buttons">
              <button className="button" id="cancel" onClick={this.cancelReset.bind(this)}>Cancel</button><br />
              <button className="button edit" id="change-pass" onClick={this.reset.bind(this)}>Change Password</button><br />
            </div>
        </form>
        <div id="popup">
          <PopUp resetSuccessful={this.state.resetSuccessful} togglePopUp={this.togglePopUp.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Profile;
