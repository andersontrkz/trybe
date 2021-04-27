import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const App = () => (<ul> { tarefas.map(tarefa => <li> {tarefa}</li>) }</ul>);

export default App;
