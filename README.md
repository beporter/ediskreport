# eDiskReport

Aims to be an Electron implementation of [jDiskReport](http://www.jgoodies.com/freeware/jdiskreport/).


## Requirements

* [Node.js v6.0+](https://nodejs.org/)
	* [Yarn v0.27+](https://yarnpkg.com/en/docs/install)


Example:

```shell
$ sudo port install yarn  # Also installs Node.
```


## Development

First run:

```shell
$ git clone git@github.com:beporter/ediskreport.git
$ cd ediskreport/
$ yarn install
```

Active development:

```shell
$ yarn start  # (Will launch the electron app locally.)

# In a separate terminal window:
$ yarn run watch  # (Will watch for file saves and rebuild the app automatically.)
```

Once both are running, edit and save code, then <kbd>Cmd</kbd>+<kbd>R</kbd> to reload the app in the Electron window.


## Working Notes

Build GUI as if it was a browser app.

Create a node app that has a restful or rpc api, and then build the web app that makes calls to that "server" app.

Redux for managing global data store, preact for rendering minimal changes based on that store.

Need to decide how to take `ls` results and turn it into structured data.


## @TODO

* Get a single hardcoded path "submission" to return `ls` data.
    * Maybe an array or object containing elements like: `{ name: 'file.jpg', type: f|d, bytes: 12345, children: {...}, extra: {...}}`.
    * See: https://stackoverflow.com/a/31831122/70876 & [References](#References)
* Render the current path and a pie chart of directory contents.
    * Limit number of entries in chart to `x` (10-20), group remaining small files into a single wedge named "others".
* Get test infrastructure set up.


## References

* [React Desktop](http://reactdesktop.js.org/demo/) skins React to look like macOS or Win10.
* [Charts.js](http://www.chartjs.org/samples/latest/charts/pie.html) can help you render a pie chart as an HTML5 canvas.
* [node-dir](https://www.npmjs.com/package/node-dir) MIT
* [directory-tree](https://www.npmjs.com/package/directory-tree) MIT
* [complete-directory-tree](https://www.npmjs.com/package/complete-directory-tree) MIT


### Sample Apps

* [File Explorer](https://github.com/hokein/electron-sample-apps/tree/master/file-explorer) let's you navigate around a filesystem.


## License

&copy; 2017 Brian Porter. All rights reserved.
