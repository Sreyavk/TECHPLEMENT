import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './components/Quote';
import Search from './components/Search';
import './App.css';

function App() {
    const [quote, setQuote] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/quotes/random');
            setQuote(response.data);
        } catch (error) {
            console.error('Error fetching the quote:', error);
        }
    };

    const searchQuotes = async (author) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching quotes:', error);
        }
    };

    return (
        <div className="App">
            <h1>Quote of the Day</h1>
            {quote && <Quote quote={quote} />}
            <button onClick={getRandomQuote}>Get Another Quote</button>
            <Search searchQuotes={searchQuotes} />
            {searchResults.length > 0 && searchResults.map((q, index) => <Quote key={index} quote={q} />)}
        </div>
    );
}

export default App;
