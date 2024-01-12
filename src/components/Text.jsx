import { PropTypes } from 'prop-types';

export default function Text({ text }) {
    return (
        <div id="text">
            <h2>{ text }</h2>
        </div>
    )
}

Text.propTypes = {
    text: PropTypes.string.isRequired
}