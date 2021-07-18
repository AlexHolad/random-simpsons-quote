import React from 'react'

function Quote ({quote}) {

    return (
       <figure className="QuoteCard">
          <img src={quote.image} alt={quote.character} />
          <figcaption>
            <blockquote>{quote.quote}</blockquote>
            <p>
              <cite>{quote.character}</cite>
            </p>
          </figcaption>
        </figure>
      );

} 

export default Quote