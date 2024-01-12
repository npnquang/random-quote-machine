import PropTypes from 'prop-types'

export default function NewQuoteButton({ getQuote, changeText, changeAuthor }) {

    const handleClick = () => {
        const newQuote = getQuote();
        const { text, author } = newQuote;
        changeText(text);
        changeAuthor(author);
    }
    return (
        <div id="new-quote">
            <button onClick={handleClick}>New Quote !!!</button>
        </div>
    )
}

NewQuoteButton.propTypes = {
    getQuote: PropTypes.function.isRequired,
    changeText: PropTypes.function.isRequired,
    changeAuthor: PropTypes.function.isRequired,
}