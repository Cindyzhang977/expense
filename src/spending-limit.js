import React from 'react';
import './dashboard.css';

class SpendingLimit extends React.Component {
  render() {
    return (
      <div>
        <div className="spending-limit content-item content">
            <h1>Spending limit</h1>
            <p>Set a monthly spending limit to help you reach your goals!</p>
            <form className="set-limit-form">
                <input type="text" name="limit-value" className="limit-input"/>
                <input type="submit" value="Set Limit" className="button limit-submit" />
            </form>
        </div>

        <div className="progress content">
            <input type="submit" value="Edit Limit" className="button" />
            <div className="progress-tracker">
                <div className="progress-bar">
                    <div className="bar"><div className="filler"></div></div>
                </div>
                <p>$100</p>
            </div>

            <p id="percentage">40%</p>
        </div>
      </div>
    )
  }
}

export default SpendingLimit;
