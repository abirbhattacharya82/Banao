import React from 'react';
import './More.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function More() {
  const [showDropdown, setShowDropdown] = useState(false);
  function showDD(){
    setShowDropdown(!showDropdown)
  }
  return (
    <div className="More">
      <button onClick={showDD}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      {showDropdown ? (

        <div className="Dropdown">
          <button>Edit</button>
          <button>Report</button>
          <button>Option 3</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default More;
