import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  console.log('Current working directory:', process.cwd());
  console.log('__dirname:', __dirname);

  if (app.isPackaged) {
    const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
    console.log('Loading production path:', indexPath);
    win.loadFile(indexPath)
      .catch(err => {
        console.error('Error loading index.html:', err);
      });
  } else {
    console.log('Loading development URL');
    win.loadURL('http://localhost:5173')
      .catch(err => {
        console.error('Error connecting to dev server:', err);
      });
  }

  if (!app.isPackaged) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});