import React from "react";
import logo from '../Reizlogo.png';

export default function Header() {
  return (
    <header className="header">
      <h3 className="mail"> <a class="mailto" href="mailto:aleksandr.dubovek@gmail.com">aleksandr.dubovek@gmail.com</a></h3>
      <img src={logo} alt="Reizlogo" width="90px" height="90px"></img>
    </header>
  );
}
