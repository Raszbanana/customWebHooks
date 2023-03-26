import fs from 'fs';
import axios from 'axios';

const folderPath = './registeredWebHooks'; // replace with your folder path

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const filePath = folderPath + '/' + file;
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const webhook = JSON.parse(data);
      axios.post(webhook.url, { message: 'Hello, world!' })
        .then(res => {
          console.log(`POST request sent to ${webhook.url}`);
        })
        .catch(err => {
          console.error(`Error sending POST request to ${webhook.url}: ${err}`);
        });
    });
  });
});