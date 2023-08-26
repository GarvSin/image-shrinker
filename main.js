const { app, BrowserWindow}  = require ('electron')

function createMainWindow () {
    const mainWindow = new BrowserWindow({
        title: 'IMageShrink',
        width: 500,
        height: 600
    })
}

app.on('ready', createMainWindow)