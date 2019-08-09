import React from 'react';
import "./profile.css";

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
  render() {
    return (
      <div>
        <div className="content">
            <h1>Profile Basic Information</h1>
        </div>
        <ChangeProfileInfo />
        <div className="content">
            <h1>Reset Password</h1>
        </div>
        <ResetPassword />
      </div>
    );
  }
}

function ChangeProfileInfo(props) {
  return (
    <div className="profile-info content">
        <div className="info">
            <div className="info-items">
                <p>First Name:</p>
                <p>Last Name:</p>
                <p>Email:</p>
                <p>Username:</p>
            </div>
            <form>
                <input type="text" value="First Name" /><br />
                <input type="text" value="Last Name" /><br />
                <input type="text" value="Email" /><br />
                <input type="text" value="Username" /><br />
            </form>
        </div>
        <div className="edit-buttons">
            <button className="button" id="cancel">Cancel</button> <br />
            <button className="button edit">Edit</button>
        </div>
    </div>
  );
}

function ResetPassword(props) {
  return (
    <form className="form-container">
        Old Password: <br />
        <input type="text" name="old-password" /><br />
        New Password: <br />
        <input type="text" name="new-password" /><br />
        Confirm New Password: <br />
        <input type="text" />
        <div className="edit-buttons">
            <button className="button" id="cancel">Cancel</button><br />
            <button className="button edit" id="change-pass">Change Password</button><br />
        </div>

    </form>
  );
}

export default Profile;
