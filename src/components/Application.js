import { h, render, Component } from 'preact';
import { connect } from 'preact-redux';
import Scanner from './Scanner';
import Browser from './Browser';
import Display from './Display';

class Application extends Component {
    render({ location, isLoading, errorMessage }) {

        if (! location) {
            return this.renderPathSelectScreen();
        } else if (isLoading) {
            return this.renderLoadingScreen();
        } else if (errorMessage.length) {
            return this.renderErrorMessageScreen(errorMessage);
        } else {
            return this.renderBrowserAndGraph();
        }
    }

    // temporary static version of the initial "select a file tree" screen.
    renderPathSelectScreen() {
        return (
            <div class="container path-select">
                <header>
                  <h2>An Electron replacement for jDiskReport</h2>
                </header>

                <button id="openFile">Scan path</button>

                <label for="scanPath">Scan path: </label>
                <input id="scanPath" type="file" /* style="width:0px;" */ webkitdirectory directory />
                <p>Quick select:</p>
                <ul>
                    <li>/</li>
                    <li>~</li>
                </ul>
            </div>
        );
    }

    // temporary static "loading" screen.
    renderLoadingScreen() {
        return (
            <div class="container loading">
                <p>Loading... @TODO: progress bar?</p>
            </div>
        );
    }

    // temporary basic error display.
    renderErrorMessageScreen(err) {
        return (
            <div class="container errorMessage">
                <p>{err}</p>
            </div>
        );
    }

    // WIP file browser and graph display.
    renderBrowserAndGraph() {
        return (
            <div class="flex-container chart-display">
                <Browser /> {/* File browser tree */}
                <Display /> {/* Pie chart display */}
            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.browser.location,
        isLoading: state.browser.isLoading,
        errorMessage: state.browser.errorMessage
    }),
    { scanPath }
)(Application);
