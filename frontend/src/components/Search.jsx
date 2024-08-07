import React, { useState } from 'react';

const Search = ({ searchQuotes }) => {
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchQuotes(author);
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    placeholder="Search by author" 
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
