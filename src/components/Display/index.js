import { h } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { changeLocation } from '../../reducers/browser';
//import { Scanner } from "../Scanner';

const Display = ({ isLoading, errorMessage, files }) => (
    <div class="chart-container">
        <pre>
            <code>
                {JSON.stringify(files, null, 2)}
            </code>
        </pre>
    </div>
)

export default connect(
    state => ({ files: state.browser.files }),
    { changeLocation }
)(Display);

/*
connect(
    mapStateToProps,
    mapDispatchToProps,
)
*/
