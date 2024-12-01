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

  // En mode production, charge le fichier index.html depuis le dossier dist
  if (app.isPackaged) {
    win.loadFile(path.join(process.cwd(), 'dist', 'index.html'))
      .catch(err => {
        console.error('Erreur lors du chargement de index.html:', err);
      });
  } else {
    // En mode développement, charge depuis le serveur Vite
    win.loadURL('http://localhost:5173')
      .catch(err => {
        console.error('Erreur lors de la connexion au serveur de développement:', err);
      });
  }

  // Ouvre les outils de développement en mode développement
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