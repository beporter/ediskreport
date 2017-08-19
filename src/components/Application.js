import { h, render, Component } from 'preact';
import { Clock } from './Clock';

export default class Application extends Component {
    render() {
        return (
            h('header', null, [
                h('h1', null, 'eDiskReport'),
                h('h2', null, 'An Electron replacement for jDiskReport'),
                <Clock />,

                /*
                    <div class="container-fluid">
                      <canvas class="chart"></canvas>
                    </div>
                */
            ])
        );
    }
}
