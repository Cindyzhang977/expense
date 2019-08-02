import React from 'react';
import "./profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
            <h1>Profile Basic Information</h1>
        </div>
        <ProfileInfo />
        <div className="content">
            <h1>Reset Password</h1>
        </div>
        <ResetPassword />
      </div>
    );
  }
}

function ProfileInfo(props) {
  return (
    <div className="profile-info content">
        <div className="info">
            <div>
                <p>First Name:</p>
                <p>Last Name:</p>
                <p>Email:</p>
                <p>Username:</p>
            </div>
            <form>
                <input type="text" value="First Name" />
                <input type="text" value="Last Name" />
                <input type="text" value="Email" />
                <input type="text" value="Username" />
            </form>
        </div>
        <div className="edit-buttons">
            <button className="button">Edit</button> <br />
            <button className="button">Cancel</button>
        </div>
    </div>
  );
}

function ResetPassword(props) {
  return (
    <form className="form-container content">
        Old Password:
        <input type="text" name="old-password" />
        New Password:
        <input type="text" name="new-password" />
        Confirm New Password:
        <input type="text" />
        <div className="edit-buttons">
            <button className="cancel-button">Cancel</button>
            <input type="submit" value="Change Password" />
        </div>

    </form>
  );
}

export default Profile;
