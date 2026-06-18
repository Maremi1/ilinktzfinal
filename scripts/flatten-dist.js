import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const clientDir = path.join(distDir, 'client');
const serverDir = path.join(distDir, 'server');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(clientDir)) {
  // Rename _shell.html to index.html
  const shellFile = path.join(clientDir, '_shell.html');
  const indexFile = path.join(clientDir, 'index.html');
  if (fs.existsSync(shellFile)) {
    fs.copyFileSync(shellFile, indexFile);
    console.log('Renamed _shell.html to index.html');
  }

  // Copy all contents from dist/client into dist (overwriting if needed)
  for (const file of fs.readdirSync(clientDir)) {
    const src = path.join(clientDir, file);
    const dest = path.join(distDir, file);
    // Remove existing destination if it exists
    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }
    copyRecursive(src, dest);
  }

  // Remove client and server dirs
  fs.rmSync(clientDir, { recursive: true, force: true });
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }

  console.log('Successfully flattened dist directory for SPA deployment.');
}
