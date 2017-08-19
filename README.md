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

Once both are running, edit and save code, then <kbd>Cmd-R</kbd> to reload the app in the Electron window.


## References

* [React Desktop](http://reactdesktop.js.org/demo/) skins React to look like macOS or Win10.
* [Charts.js](http://www.chartjs.org/samples/latest/charts/pie.html) can help you render a pie chart as an HTML5 canvas.
* [node-dir](https://www.npmjs.com/package/node-dir)


### Sample Apps

* [File Explorer](https://github.com/hokein/electron-sample-apps/tree/master/file-explorer) let's you navigate around a filesystem.


## License

&copy; 2017 Brian Porter. All rights reserved.
