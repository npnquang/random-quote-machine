import PropTypes from 'prop-types'

export default function TweetQuoteButton({ text, author}) {
    const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + " " + author);

    return (
        <a id="tweet-quote" className="twitter-share-button" href={url} target='_blank' rel="noopener noreferrer">Tweet</a>
    )
}

TweetQuoteButton.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}