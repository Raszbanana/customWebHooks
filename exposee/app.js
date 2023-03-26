import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json())

app.post('/register-web-hook', (req, res) => {
  const webHookInfo = {
    ...req.body
  }
  fs.writeFileSync(`./registeredWebHooks/${webHookInfo.name}.json`, JSON.stringify(webHookInfo))
  res.send('Webhook was registered for: ' + webHookInfo.name + ' ' + webHookInfo.url)
}); 

app.delete('/delete-webhook/:name', (req, res) => {
  const { name } = req.params;
  fs.unlinkSync(`./registeredWebHooks/${name}.json`)
  res.send({ message: 'Web hook deleted' })
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})