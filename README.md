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

### First run

```shell
$ git clone git@github.com:beporter/ediskreport.git
$ cd ediskreport/
$ yarn install
```

### Active development

```shell
$ yarn start  # (Will launch the electron app locally.)

# In a separate terminal window:
$ yarn watch  # (Will watch for file saves and rebuild the app automatically.)
```

Once both are running, edit and save code, then <kbd>Cmd</kbd>+<kbd>R</kbd> to reload the app in the Electron window.


### Code Signing

@TODO


### Building a Release

@TODO


## Working Notes

Build GUI as if it was a browser app.

Redux for managing global data store, preact for rendering minimal changes based on that store.

Need to decide how to take `ls` results and turn it into structured data.


## @TODO

* Get a single hardcoded path "submission" to return `ls` data.
    * Maybe an array or object containing elements like: `{ name: 'file.jpg', type: f|d, bytes: 12345, children: {...}, extra: {...}}`.
    * See: https://stackoverflow.com/a/31831122/70876 & [References](#References)
* Render the current path and a pie chart of directory contents.
    * Limit number of entries in chart to `x` (10-20), group remaining small files into a single wedge named "others".
* Get test infrastructure set up.
* Code signing.
* Building a release-able package per-platform.
* CI/build integration?


## References

* [React Desktop](http://reactdesktop.js.org/demo/) skins React to look like macOS or Win10.
* [Charts.js](http://www.chartjs.org/samples/latest/charts/pie.html) can help you render a pie chart as an HTML5 canvas.
* [node-dir](https://www.npmjs.com/package/node-dir) MIT
* [directory-tree](https://www.npmjs.com/package/directory-tree) MIT
* [complete-directory-tree](https://www.npmjs.com/package/complete-directory-tree) MIT
* [Resizing flexbox](https://gist.github.com/randompast/e3d2fc4319a35858918f)
* [Selecting a dir in Electron](https://jaketrent.com/post/select-directory-in-electron/)
* [Opening native dialogs in electron](http://mylifeforthecode.com/getting-started-with-standard-dialogs-in-electron/)
* [More system dialogs](https://www.tutorialspoint.com/electron/electron_system_dialogs.htm)

* [Sync redux store between main and renderer processes in Electron](https://github.com/hardchor/electron-redux). Good graph to understand conceptually, but looks to require double the memory for duplicated stores in each thread. Supposedly we have access to node api's in the renderer threads. (can't figure out how to import them though) so maybe we can do _everything_ in the renderer?
* [More Electron + Redux](https://github.com/Shishamou/redux-electron)


### Sample Apps

* [File Explorer](https://github.com/hokein/electron-sample-apps/tree/master/file-explorer) let's you navigate around a filesystem.


## License

&copy; 2017 Brian Porter. All rights reserved.
