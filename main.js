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
        width: 1200,
        height: 700,
        resizable: false,
        icon: path.join(__dirname, 'assets/icons/win/icon.ico')
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', function () {
        app.quit();
    });

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
            label: 'Reset',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    if (focusedWindow.id == 1) {
                        BrowserWindow.getAllWindows().forEach(function (win) {
                            if (win.id > 1) {
                                win.close()
                            }
                        })
                    }
                    focusedWindow.reload();
                }
            }
        },
        {
            label: 'Exit',
            click() {
                app.quit();
            }
        }
    ]
}]

app.on('ready', windowCreate);

//if mac, add empty object

if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// if (process.env.NODE_ENV !== 'production') {
//     mainMenuTemplate.push({
//         label: 'DevTools',
//         accelerator: (function () {
//             if (process.platform === 'darwin') {
//                 return 'Alt+Command+I'
//             } else {
//                 return 'Ctrl+Shift+I'
//             }
//         })(),
//         click: function (item, focusedWindow) {
//             if (focusedWindow) {
//                 focusedWindow.toggleDevTools()
//             }
//         }
//     })
// }