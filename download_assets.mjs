import fs from 'fs';
import path from 'path';
import https from 'https';

const findAssetJsonFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findAssetJsonFiles(filePath, fileList);
    } else if (filePath.endsWith('.asset.json')) {
      fileList.push(filePath);
    }
  }
  return fileList;
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  const srcDir = path.join(process.cwd(), 'src');
  const publicDir = path.join(process.cwd(), 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const assetJsonFiles = findAssetJsonFiles(srcDir);
  console.log(`Found ${assetJsonFiles.length} .asset.json files.`);

  for (const file of assetJsonFiles) {
    try {
      const content = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!content.project_id || !content.url) {
        console.log(`Skipping ${file} - missing project_id or url`);
        continue;
      }
      
      const remoteUrl = `https://${content.project_id}.lovableproject.com${content.url}`;
      
      const urlPath = content.url.startsWith('/') ? content.url.slice(1) : content.url;
      const localDest = path.join(publicDir, urlPath);
      const localDir = path.dirname(localDest);
      
      if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
      }

      if (fs.existsSync(localDest)) {
        console.log(`Already downloaded: ${localDest}`);
        continue;
      }

      console.log(`Downloading ${remoteUrl} to ${localDest}...`);
      await downloadFile(remoteUrl, localDest);
      console.log(`Downloaded ${localDest}`);
    } catch (err) {
      console.error(`Error processing ${file}: ${err.message}`);
    }
  }
  
  console.log('All downloads finished.');
};

main();
