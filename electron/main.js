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

  // En production, charge le fichier index.html depuis le dossier dist
  if (process.env.NODE_ENV === 'production') {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  } else {
    // En développement, se connecte au serveur de développement Vite
    win.loadURL('http://localhost:5173');
  }

  // Ouvre les outils de développement en mode développement
  if (process.env.NODE_ENV !== 'production') {
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