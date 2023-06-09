import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Child text="Best hanter kilua" title="Hanter x Hanter" />
        <Child text="Best shinobi ichigo" title="Bleach" />
        <Child text="Best hunter tanjiro" title="demon slayer" />

        <Child2>
          <h1> Photo №1</h1>
          <img
            src="https://img.championat.com/c/1200x900/news/big/h/p/bloger-sokratil-naruto-na-115-chasov-radi-devushki_16494393021767498187.jpg"
            alt=""
            width="200px"
          />
        </Child2>

        <Child2>
          <h1> Photo №2</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzLPcSve0JhF6q_rXmTeftsqKzzENz0uXeQ&usqp=CAU"
            alt=""
            width="200px"
          />
        </Child2>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>CHILD 1</h1>
        <h1 className="title">{this.props.title}</h1>
        <h2 className="text">{this.props.text}</h2>
      </div>
    );
  }
}

class Child2 extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>CHILD 2</h1>
        {this.props.children}
      </div>
    );
  }
}
export default App;
