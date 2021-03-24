const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
//"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
// }

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  //"Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  order.name = 'Luiz Silva';
  
  order.order.pizza.muzzarella = {amount:1, price: 25};
  order.order.pizza.calabresa = {amount:1, price: 25};
  

  let valorTotal = order.order.pizza.muzzarella.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price - 10
  console.table(order.order.pizza.muzzarela.name);
  // console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza.muzzarela.name}`);
}

orderModifier(order);