import React from "react";
<script></script>;

const Topbar = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h2>LOGO</h2>
      </div>
      <input type='checkbox' id='click' />
      <label htmlFor='click'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </label>
      <ul>
        <li>
          {" "}
          <a className='link' href='#'>
            Home
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className='link' href='#'>
            Products
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className='link' href='#'>
            Services
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className='link' href='#'>
            Contact
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
