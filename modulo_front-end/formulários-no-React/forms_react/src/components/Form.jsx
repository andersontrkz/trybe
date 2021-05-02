import React from 'react'
import TextArea from './TextArea'
import NameInput from './NameInput'


class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      textArea: '',
      selectCars: '',
      ckeckbox: false,
      name:'',
      formularioComErros: false,

    }
  }

  handleChange = ({ target }, formIsWrong) => {
    if(formIsWrong === true) {
      this.setState({
        formularioComErros: formIsWrong
      })
    }
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [ name ]: value,
    });
  }

  render() {
    return (
      <section>
        <h1>Meu Primeiro formulario</h1>
        <form action="">

          <NameInput handleChange={this.handleChange} value={this.state.name}/>
          <br/>
          <label htmlFor="cars"> Carros
            <select name="selectCars" onChange={this.handleChange} id="cars" value ={this.state.selectCars}>
              <option value="BMW">BMW</option>
              <option value="Porche">Porche</option>
            </select>
          </label>
          <hr/>
          <br/>
          <TextArea handleChange={this.handleChange} value={this.state.textArea} />
          <br/>
          <label htmlFor="">checked
            <input type="checkbox" name="ckeckbox" onChange={this.handleChange} value={this.state.ckeckbox} />
          </label>
        </form>
      </section>
    
    )
  }
}

export default Form