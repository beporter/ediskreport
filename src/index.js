const {app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '..', 'public', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Make the directory scanner module available.
  //const scanner = require('./scanner')


  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

function onOpenFileDialog (event, arg) {
    dialog.showOpenDialog(win, {
        properties: ['openDirectory']
    }, (paths) => {
        if (paths && paths.length > 0) {
            return scanTree(paths[0]);
        }
    });
}

function scanTree(path) {
    console.log('got call to scan ' + path);
    app.addRecentDocument(path);
}


// === Set up menus and app meta data. @TODO: Move this out to its own file and require() it in.

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Path...',
        accelerator: 'CommandOrControl+O',
        click () { onOpenFileDialog(); },
      },
    ],
  },
  /*
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  */
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://github.com/beporter/ediskreport') }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: 'Electron', //app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  });

  // Edit menu
/*
  template[2].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  );
*/

  // Window menu
  template[2].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ];
}

const menu = Menu.buildFromTemplate(template);







// const dockMenu = Menu.buildFromTemplate([
//   {label: 'Scan...', click () { onOpenFileDialog(); }},
// ]);
// app.dock.setMenu(dockMenu);
// app.dock.setIcon('assets/icon.png');
// app.setUserTasks([]);

app.setAboutPanelOptions({
    applicationName: 'eDiskReport',
    applicationVersion: '0.0.1',
    copyright: '© Copyright 2017 Brian Porter',
    credits: 'Electron, Node, Preact, Redux, etc.',
    version: '1',
});


// === Register Main Thread Event Handlers

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createWindow();
    Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('openFile', onOpenFileDialog);
app.on('open-file', (event, arg) => {
    scanTree(arg);
});
