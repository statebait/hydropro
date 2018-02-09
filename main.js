const {
    app,
    BrowserWindow,
    Menu
} = require('electron');
const path = require('path');
const url = require('url');

let win;

function windowCreate() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //Build menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //Insert menu
    Menu.setApplicationMenu(mainMenu);
}

//      Menu Template

const mainMenuTemplate = [{
        label: 'File',
        submenu: [{
            // Functionality required.
                label: 'Reset'
            },
            {
                label: 'Exit',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu: [{
            label: 'Instructions',
            click() {
                const modalPath = path.join(__dirname, 'instruction.html')
                let win = new BrowserWindow({
                    frame: false,
                    width: 650,
                    height: 500
                })
                win.on('close', function () {
                    win = null
                })
                win.loadURL(modalPath)
                win.show()
            }
        }]
    },
    //Temporary for Devlopment purposes
    {
        label: 'DevTools',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        }
      }
]

app.on('ready', windowCreate);

//quit when all windows are closed

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});