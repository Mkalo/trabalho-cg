import { app as ElectronApp, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

ElectronApp.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600, resizable: false, useContentSize: true, webPreferences: { devTools: true } });
	mainWindow.setMenu(null);
	mainWindow.webContents.openDevTools();
	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

ElectronApp.on('window-all-closed', () => {
	ElectronApp.quit();
});
