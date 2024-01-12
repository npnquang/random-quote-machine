import PropTypes from 'prop-types'

export default function TweetQuoteButton({ text, author}) {
    const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + " " + author);

    return (
        <div id="tweet-quote">
            <a className="twitter-share-button" href={url} target='_blank' rel="noopener noreferrer">Tweet</a>
        </div>
    )
}

TweetQuoteButton.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}