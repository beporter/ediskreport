import { h, render, Component } from 'preact';
import { sanitize } from 'sanitize-filename';
const fs = require('fs');

//const exec = require('child_process').exec;

export class Scanner extends Component {
    constructor(options = {path: '/tmp'}) {
        super();
        this.state.rootDir = options.path;
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render(props, state) {
        console.log('calling fs.readdir(' + this.state.rootDir + ')');
        console.log(this.state.rootDir);
        var output = JSON.stringify(fs.readdirSync(this.state.rootDir), null, 2);
        console.log(output);

//         var output = exec('ls -l ' + this.rootDir, function(err, stdout, stderr) {
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// });
//         var output = 'something';
        return <pre>{ output }</pre>;
    }
}

