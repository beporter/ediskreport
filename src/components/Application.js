import { h, Component } from 'preact';

export default class Application extends Component {
    render() {
        return (
            h('header', null, [
                h('h1', 'eDiskReport'),
                h('h2', 'An Electron replacement for jDiskReport'),
                /*
                    <div class="container-fluid">
                      <canvas class="chart"></canvas>
                    </div>
                */
            ])
        );
    }
}
