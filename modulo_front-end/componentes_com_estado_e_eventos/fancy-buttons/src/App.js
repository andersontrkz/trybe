import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.botao1 = this.botao1.bind(this)
    this.botao2 = this.botao2.bind(this)
    this.botao3 = this.botao3.bind(this)

    this.state = {
      numeroDeCliquesBotao1: 0,
      numeroDeCliquesBotao2: 0,
      numeroDeCliquesBotao3: 0,
    }
  }
  
  
  botao1() {
    this.setState({
      numeroDeCliquesBotao1: this.state.numeroDeCliquesBotao1 + 1,
    });

    console.log(this)
  }
  
  botao2() {
    this.setState({
      numeroDeCliquesBotao2: this.state.numeroDeCliquesBotao2 + 1,
    });

    console.log(this)
  }

  botao3() {
    this.setState({
      numeroDeCliquesBotao3: this.state.numeroDeCliquesBotao3 + 1,
    });

    console.log(this)
  }

  render() {
    return (
    <div>
      <button onClick={this.botao1}>{this.state.numeroDeCliquesBotao1}</button>
      <button onClick={this.botao2}>{this.state.numeroDeCliquesBotao2}</button>
      <button onClick={this.botao3}>{this.state.numeroDeCliquesBotao3}</button>
    </div>
    )

  }
}

export default App;