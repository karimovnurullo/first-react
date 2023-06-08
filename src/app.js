import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Skills />
        <About />
        <Contact />
      </div>
    );
  }
}
