const {
    app,
    BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');

let win;

function windowCreate() {
    win = new BrowserWindow({
        width: 600,
        height: 500,
        icon: __dirname
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
}

app.on('ready', windowCreate);

//quit when all windows are closed

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});