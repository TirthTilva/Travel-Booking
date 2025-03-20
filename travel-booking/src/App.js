import React from 'react';
import './App.css';
function App() {
  const searchFunction = () => {
    const input = document.getElementById('search').value;
    alert(`Searching for: ${input}`);
  };
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>
              <button className='login'>Log In</button>
            </td>
            <td>
              <button className='signup'>Sign Up</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" id="search" placeholder="Search" />
        <button onClick={searchFunction}>Go</button>
      </div>
    </div>
  );
}
function Content(){
  return(
    <div className='list'>
      <table>
        <tr>
          <td>
            <img src='logo192.png'></img>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default App;
