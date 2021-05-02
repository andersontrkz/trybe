import React from 'react';

class NameInput extends React.Component {
  
  render() {
    const { handleChange, value } = this.props;

    let error = undefined
    let formIsWrong = false
    if(value.length >= 30 || value.includes('!')) {
      error = "Texto muito grande";
      formIsWrong = true;
    }

    return (
        <label htmlFor="name">Qual seu primeiro nome?
          <input type="text" name='name' onChange={handleChange} value={ value }/>
        <span>{error ? error : '' }</span>
        </label>
    )
  }
};

export default NameInput
