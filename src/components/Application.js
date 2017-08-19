import { h, render, Component } from 'preact';
import { Clock } from './Clock';

export default class Application extends Component {
    render() {
        return this.renderPathSelect();
        //return this.renderDirDisplay();
    }

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

    // temporary static version of an individual directory display
    renderDirDisplay() {
        return (
            <div class="flex-container chart-display">
                <nav class="nav-containter">
                    nested file listing nav
                </nav>

                <div class="chart-container">
                    <div>pie chat for current dir</div>
                    <canvas class="chart"></canvas>
                </div>

            </div>
        );
    }
}
