import { useState } from 'react'
import Todo from './models/todo';
import "./App.css"
import TodoComponent from './components/TodoComponent';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {

  const [todos, setTodo] = useState<Todo[]>([
    {
      id: 1,
      description: 'Fazer tarefa',
      category: 'Tarefa',
      completed: false,
    },
    {
      id: 2,
      description: 'Ir a academia',
      category: 'Academia',
      completed: false,
    },
    {
      id: 3,
      description: 'Estudar React',
      category: 'Estudo',
      completed: false,
    },
  ]);


  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Asc");

  function addTodo(description: string, category: string) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      description: description,
      category: category,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodo(newTodos);
  }

  function removeTodo(id: number) {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id != id ? todo : null);
    setTodo(filteredTodos);
  }

  function completeTodo(id: number) {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.completed = !todo.completed : todo);
    setTodo(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {todos.filter((todo) => filter == "All" ? true : filter == "Completed" ? todo.completed : !todo.completed)
          .filter((todo) => todo.description.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort == "Asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description),)
          .map((todo) => (
            <TodoComponent key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
