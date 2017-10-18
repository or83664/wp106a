const {Menu, dialog} = require('electron').remote
const fs = require('fs')

const template = [
  {
    label: 'File',
    submenu:[ 
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: function () {
          dialog.showOpenDialog(
            function (fileName) {
              if (fileName === undefined) {
                console.log('No file selected')
                return
              }
              console.log('fileName=' + fileName)

              var filePath = document.getElementById('filePath')
              filePath.innerText = fileName
              fs.readFile(fileName.toString(), 'utf8', function (err, data) {
                if (err) window.alert('read fail!')
                var text = document.getElementById('text')
                text.value = data
              })
            }
          )
        }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click: function () {
          var fileName = document.getElementById('filePath').innerText
          if (fileName.trim().length === 0) window.alert('Do you want to save?')
          var text = document.getElementById('text')
          fs.writeFile(fileName, text.value)
        }
      },
      {
        label: 'NewFile',
        accelerator: 'CmdOrCtrl+N',
        click: function(){
          var filePath = document.getElementById('filePath')
          filePath.innerText = ''
          //filePath.innertext.clear()
          // var fileName = document.getElementById('filePath').innerText
          // filePath = ""
          var text = document.getElementById('text')
          text.value = ""
          //text.clear()
          // setObj.clear(filePath ,text)
        }
      },
      {
        label: 'SaveAs',
        accelerator: 'CmdOrCtrl+A+S',
        click: function () {
          var fs = require('fs');
          var fileName = document.getElementById('filePath').innerText
          if (fileName.trim().length === 0) window.alert('Do you want to save?')
          dialog.showSaveDialog({ filters: [
                 { name: 'text', extensions: ['txt'] }
                ]}, function (fileName) {
                if (fileName === undefined) return;
                fs.writeFile(fileName, function (err) {   
                 dialog.showMessageBox({ message: "The file has been saved! :-)",
                 buttons: ["OK"] });
                });
            
              }); 
          var text = document.getElementById('text')
          fs.writeFile(fileName, text.value)
        }
      },     
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [ { label: 'Learn More' } ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
