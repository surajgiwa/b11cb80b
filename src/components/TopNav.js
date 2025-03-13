import React from 'react';
import './topNav.css'; // Import the CSS file

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="tab">Activity</div>
      <div className="tab"> Inbox</div>
      <div className="tab">All Calls</div>
      <div className="activeIndicator"></div>
    </div>
  );
};

export default TopNav;