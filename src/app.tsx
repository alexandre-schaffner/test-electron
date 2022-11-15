import { app, BrowserWindow } from 'electron'
import { render } from 'solid-js/web'

function createWindow () {
  const win: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  function HelloWorld() {
    return <div>Hello World!</div>;
  }

  render(() => <HelloWorld/>, win.getElementById('app'))

}

  app.whenReady().then(() => {
    createWindow()
  })
