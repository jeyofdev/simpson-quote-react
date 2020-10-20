import React, { Component } from 'react'
import QuoteSimpson from './QuoteSimpson'
import axios from 'axios'
import '../styles/css/Quote.css'


class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: null
        }
        this.randomQuote = this.randomQuote.bind(this)
    }

    componentDidMount = () => {
        this.randomQuote()
    }

    randomQuote = () => {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.data)
        .then(data => {
            this.setState({
                quote: data[0],
            });
        });
    }

    render () {
        const { quote } = this.state

        return (
            <div>
                {
                    quote
                        ? <QuoteSimpson quote={quote} />
                        : <p>Chargement...</p>
                }

                <button className="btn" onClick={this.randomQuote}>Generate a quote</button>
            </div>
        );
    }
}

export default Quote;
