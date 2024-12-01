import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  console.log('Création de la fenêtre principale...');
  
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  console.log('Mode application:', app.isPackaged ? 'Production' : 'Développement');
  
  if (app.isPackaged) {
    const indexPath = path.join(__dirname, '../dist/index.html');
    console.log('Chargement du fichier:', indexPath);
    win.loadFile(indexPath).catch(err => {
      console.error('Erreur de chargement de index.html:', err);
    });
  } else {
    console.log('Connexion au serveur de développement Vite...');
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  console.log('Application prête, création de la fenêtre...');
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