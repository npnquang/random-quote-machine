import { PropTypes } from 'prop-types'

export default function Author({ author }) {
    return (
        <div id="author">
            <p>{ author }</p>
        </div>
    )
}

Author.propTypes = {
    author: PropTypes.string.isRequired
}