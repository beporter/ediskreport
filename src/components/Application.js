import { h, render, Component } from 'preact';
import { Clock } from './Clock';
import { Scanner } from './Scanner';
import Browser from './Browser';
import Display from './Display';

export default class Application extends Component {
    // temporary static version of the initial "select a file tree" screen.
    renderPathSelect() {
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

    render(props, state, context) {
        return (
            <div class="flex-container chart-display">
                <Browser /> {/* File browser tree */}
                <Display /> {/* Pie chart display */}
            </div>
        );
    }
}
