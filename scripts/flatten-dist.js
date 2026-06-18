import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const clientDir = path.join(distDir, 'client');
const serverDir = path.join(distDir, 'server');

if (fs.existsSync(clientDir)) {
  const shellFile = path.join(clientDir, '_shell.html');
  const indexFile = path.join(clientDir, 'index.html');
  
  if (fs.existsSync(shellFile)) {
    fs.copyFileSync(shellFile, indexFile);
    console.log('Renamed _shell.html to index.html');
  }

  // Move all contents from dist/client to dist
  const files = fs.readdirSync(clientDir);
  for (const file of files) {
    fs.renameSync(path.join(clientDir, file), path.join(distDir, file));
  }
  
  // Remove client and server dirs
  fs.rmdirSync(clientDir);
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }
  
  // also clean up any leftover server.js if it somehow got placed in dist
  const rootServerFile = path.join(distDir, 'server.js');
  if (fs.existsSync(rootServerFile)) {
    fs.unlinkSync(rootServerFile);
  }
  
  console.log('Successfully flattened dist directory for SPA deployment.');
}
