import React, {useState} from 'react'
import './App.css';
import Quote from './components/Quote';
import axios from 'axios'

const sampleQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: 'Homer Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
}

function App() {

const [quote, setQuote] = useState (sampleQuote)

const getQuote = () => {
  // Send the request
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then((response) => {setQuote(response.data[0])});
    // Use this data to update the state
    
  console.log(quote)  
} 


  return (
    <div className="App">
      <Quote quote={quote}/>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App
