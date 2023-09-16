import React, { useEffect, useState } from "react";
import './ProgressBar.css'
const Progress = ({ percent }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}>
        
        {`Completed ${percent}%`}
      </div>
    </div>
  );
};

export default Progress;
