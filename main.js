const { app, BrowserWindow}  = require ('electron')

function createMainWindow () {
    const mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        icon: '/assessts/icons/icon-camera',
        width: 500,
        height: 600
    })
    console.log(__dirname)
   // mainWindow.loadURL(`file:/${__dirname}/app/index.html`)
    mainWindow.loadFile(`./app/index.html`)

}

app.on('ready', createMainWindow)
