import fs from 'fs';
import { resolve } from 'path';

export default async function handler(req, res) {
    try {
        const filename = './src/imgs/Viktor_Johansson_CV.pdf'; 


    res.setHeader('Content-Disposition', `attachment; filename=${"Viktor_Johansson_CV"}`);
    res.setHeader('Content-Type', 'application/pdf');

    const filePath = resolve(process.cwd(), filename); 
    const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } catch (error) {
        console.error('Error while downloading file:', error);
        res.status(500).end();
      }
}