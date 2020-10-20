import React from 'react';
import '../styles/css/QuoteSimpson.css'

const QuoteSimpson = ({ quote }) => {
    return (
        <div className="content">
            <h2><strong>{quote.character}</strong></h2>
            <img src={quote.image} alt="" />
            <cite>{quote.quote}</cite>
        </div>
    )
}

export default QuoteSimpson;