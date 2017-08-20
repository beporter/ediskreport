import { h } from 'preact';
import { connect } from 'preact-redux';

const Browser = (props) => (
    <nav class="nav-container">
        nested file listing for {props.location}
    </nav>
);

export default connect(
    state => state.browser
)(Browser);
