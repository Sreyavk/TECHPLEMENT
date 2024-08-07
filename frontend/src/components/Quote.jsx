import React from 'react';

const Quote = ({ quote }) => {
    return (
        <div className="quote">
            <p>{quote.text}</p>
            <p><em>- {quote.author}</em></p>
        </div>
    );
};

export default Quote;
