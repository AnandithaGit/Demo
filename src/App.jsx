import React, { Component } from 'react';
import './App.css';

class App extends Component {
  menuClick(){
    const navlist = document.getElementById("navlist");
    //navlist.style.display = "block";
    navlist.classList.toggle("active");
  }

  render() {
    return (
      <>
      <header>
        <nav>
          <div className='logo'>
            My Website
          </div>
          <ul id="navlist">
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>About us</li>
            <li>Our Social Media</li>
          </ul>
          <div className='menu'onClick={()=>this.menuClick()}> &#9776;</div>
        </nav>
      </header>
      <section>
        <h1>Welcome to my responsive Website!</h1>
        <p>This design adopts to various screen sizes</p>
      </section>
      <footer>Copyright 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
