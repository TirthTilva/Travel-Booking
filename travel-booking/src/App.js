import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [guests, setGuests] = useState(0);

  const handleSearch = () => {
    alert(`Location: ${location}\nDate & Time: ${dateTime}\nGuests: ${guests}`);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">whimstay</div>
        <div className="auth-buttons">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>


      <div className="search-bar">
        {/* Location Input */}
        <div className="input-wrapper">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder='Ex: "Seattle" or "Texas"'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Date-Time Input */}
        <div className="input-wrapper">
          <FaCalendarAlt className="icon" />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>

        {/* Guests Input */}
        <div className="input-wrapper guests">
          <FaUsers className="icon" />
          <span className="guest-label">Add guests</span>
          <div className="guest-dropdown">
            <span>Adults (Ages 13 or above)</span>
            <div className="counter">
              <button onClick={() => setGuests(Math.max(0, guests - 1))}>−</button>
              <span>{guests}</span>
              <button onClick={() => setGuests(guests + 1)}>+</button>
            </div>
          </div>
        </div>

      <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
