import './App.css'
import { useState } from 'react'
import Text from "./components/Text.jsx"
import Author from './components/Author.jsx'
import NewQuoteButton from './components/NewQuoteButton.jsx'
import quotes from './components/quotes.js'
import TweetQuoteButton from './components/TweetQuoteButton.jsx'

function App() {
  
  function getQuote() {
    return quotes[Math.floor(Math.random() * (quotes.length - 1))];
  }

  const initialQuoteObject = getQuote();

  const {text, author} = initialQuoteObject;

  const [textDisplay, setText] = useState(text);
  const [authorDisplay, setAuthor] = useState(author);
  
  return (
    <div id="quote-box">
      <Text text={textDisplay} />
      <Author author={authorDisplay}/>
      <NewQuoteButton getQuote={getQuote} changeAuthor={setAuthor} changeText={setText}/>
      <TweetQuoteButton text={textDisplay} author={authorDisplay}/>
    </div>
  )
}

export default App
