window.onload = () =>{
  formPopulation();
}
  function formPopulation() {
    const listEstados =['Selecione o seu estado','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
    
    let select = document.querySelector('#estado');
    for (const property in listEstados) {
      let option = document.createElement('option');
      option.appendChild(document.createTextNode(listEstados[property])) // createTextNode cria um nó de texto dentro do option
      select.appendChild(option).value = listEstados[property]
      }
  }


  function checkData() {
    const inputData = document.querySelector('#data-inicio')
    let data = inputData.value;
    const userData = validateData(data)
    if (!userData && data.length) {
      inputData.value = '';
      alert('data invalida, por favor digite dentro do padrão (dd/mm/aaaa)');
      return false;
    }
    return userData;
  }

  function validateData(data) {
    if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
          const day = data.substring(0,2); 
          const month = data.substring(3,5);
          const year = data.substring(6,10);
          if ((day > 0 && day <= 31 ) && (month > 0 && month <=12) && (year > 0 && year.length === 4)){
                  return true;
                }
            }
          return false
  }
 const btnSubmit = document.querySelector('#button-submit');
 btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    checkData()
    let curriculum = document.createElement('div');
    let inputContent = document.querySelectorAll('input');
    for (let index = 0; index < inputContent.length; index += 1) {
      if (inputContent[index].type === 'radio' && !inputContent[index].checked) {
        continue;        
      }
      const userInput = inputContent[index].value;
    }
    
 });
  

