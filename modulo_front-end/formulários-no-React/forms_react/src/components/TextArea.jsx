import React from 'react'

class TextArea extends React.Component {
  
  render() {
    const { handleChange, textArea } = this.props;
    return(
      <label htmlFor="textArea"> Area de texto
      <br/>
        <textarea name="textArea" id="text" cols="10" rows="2" value={ textArea } onChange={ handleChange }></textarea>
      </label>
    )
  }
}
export default TextArea



