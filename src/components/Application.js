import { h, render, Component } from 'preact';
import { connect } from "preact-redux";
import { Clock } from './Clock';
import { Scanner } from './Scanner';
import Browser from './Browser';
import Display from './Display';
import { scanPath } from "../reducers/browser";

class Application extends Component {
    componentDidMount() {
        this.props.scanPath();
    }

    render({ isLoading, errorMessage }) {
        return (
            <div class="flex-container chart-display">
                <Browser /> {/* File browser tree */}
                {isLoading ? (
                    <p>Loading</p>
                ) : errorMessage.length ? (
                    <p>{errorMessage}</p>
                ) : (
                    <Display />
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        isLoading: state.browser.isLoading,
        errorMessage: state.browser.errorMessage
    }),
    { scanPath }
)(Application);


/**
// temporary static version of the initial "select a file tree" screen.
renderPathSelect() {
    return (
        <div class="container path-select">
            <header>
              <h2>An Electron replacement for jDiskReport</h2>
            </header>

            <button id="openFile">Scan path</button>

            <label for="scanPath">Scan path: </label>
            <input id="scanPath" type="file" style="width:0px;" webkitdirectory directory />
            <p>Quick select:</p>
            <ul>
                <li>/</li>
                <li>~</li>
            </ul>
        </div>
    );
}
**/
