import { PropTypes } from 'prop-types';

export default function Text({ text }) {
    return (
        <div id="text">
            <p>{ text }</p>
        </div>
    )
}

Text.propTypes = {
    text: PropTypes.string.isRequired
}