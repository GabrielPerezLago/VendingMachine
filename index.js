import {app, BrowserWindow, } from "electron";


function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    });

    win.loadFile("./index.html");
}


app.whenReady().then(() => {
    createWindow();

    app.on('active' , () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow;
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});




