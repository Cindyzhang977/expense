import React from 'react';
import "./index.css";

class PopUp extends React.Component {
  render() {
    return (
      <div className="popup">
        <Text success={this.props.resetSuccessful} />
        <button className="button" onClick={this.props.togglePopUp}>OK</button>
      </div>
    )
  }
}

function Text(props) {
  if (props.success) {
    return <p>Password Reset Successful!</p>;
  } else {
    return <p>Password Reset Failed</p>;
  }
}

export default PopUp;
