import { h } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { changeLocation } from '../../reducers/browser';
//import { Scanner } from "../Scanner';




const Display = (props) => (
    <div class="chart-container">
        <button onClick={ () => props.changeLocation("~/Desktop") }>
            change location
        </button>

        <div>pie chart for current dir</div>
        {/* <canvas class="chart"></canvas> */}
        {/* <Scanner path="/tmp" /> */}
    </div>
)

export default connect(
    state => state,
    { changeLocation }
)(Display);

/*
connect(
    mapStateToProps,
    mapDispatchToProps,
)
*/
