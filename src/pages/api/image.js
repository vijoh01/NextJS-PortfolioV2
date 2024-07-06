import path from 'path';

export default function handler(req, res) {
  const imagePath = path.join(process.cwd(), 'src/imgs/jag.jpg');
  const image = require('fs').readFileSync(imagePath);

  res.setHeader('Content-Type', 'image/jpg');
  res.end(image);
}