const {app, BrowserWindow} = require('electron')
//const=>ex6的寫法
//require套用套件(傳回一系列物件)
//const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('file://' + __dirname + '/index.html')
}

//事件導向的callback function
//要等APP跑完才可以進行createwindows
app.on('ready', createWindow)
