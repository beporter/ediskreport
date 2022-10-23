import { h } from 'preact';
import { connect } from 'preact-redux';

const Browser = ({ isLoading, errorMessage, files }) => (
    <nav class="nav-container">
        <pre>
            <code>
                {JSON.stringify(files, null, 2)}
            </code>
        </pre>
    </nav>
);

export default connect(
    state => ({ files: state.browser.files })
)(Browser);
