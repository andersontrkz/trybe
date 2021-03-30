const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
  'Lukas11.rs@hotmail.com'
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.
emailListInData.forEach((Element) => {
  showEmailList(Element);
});
emailListInData.forEach((Element) => showEmailList(Element));// versão resumida do mesmo codigo