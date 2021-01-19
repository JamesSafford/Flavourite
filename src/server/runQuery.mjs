import sqlite3 from 'sqlite3';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new sqlite3.Database(
  path.join(__dirname, '../../Database/Flavourite.sqlite3')
);

export default function runQuery(query, params) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows)
      }
    })
  });
}
