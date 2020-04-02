import React from "react";
import { Route } from 'react-router-dom'

import "./App.css"
import BookListContainer from "./BookListContainer"
import BookDetailContainer from './BookDetailContainer'

function App() {
  return (
    <div className="App">
      <h1>Bookish</h1>
      <main>
        <Route exact path="/" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </main>
    </div>
  )
}
export default App;