import './App.css'
import Todo from './Todo'
import BookStore from './BookStore'

function App() {

  const books = [
    { id: 1, name: 'physics', price: 100 },
    { id: 2, name: 'biology', price: 140 },
    { id: 3, name: 'math', price: 150 },
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      <Person></Person>
    </>
  )
  function Person() {
    return (
      <>
        {/* <Todo task="Learn React" isDone={true}></Todo>
        <Todo task="Explore Core Concept" isDone={false}></Todo>
        <Todo task="Jsx" isDone={true}></Todo> */}
      </>
    )
  }
}

export default App
