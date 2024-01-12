import './App.css'
import { useState } from 'react'
import Text from "./components/Text.jsx"
import Author from './components/Author.jsx'


function App() {
  
  
  return (
    <div id="quote-box">
      <Text text={"Hello"} />
      <Author author={"ME"}/>
      {/* <NewQuoteButton */}
      {/* <TweetQuoteButton /> */}
    </div>
  )
}

export default App
