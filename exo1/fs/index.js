const fs = require('fs');

let baseFolder = 'nouveau_repertoire';

if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder);
}

fs.writeFileSync(`${baseFolder}/nouveau_fichier.txt`, 'Hello world!');

const txtContent = fs.readFileSync(`${baseFolder}/nouveau_fichier.txt`, 'utf8');
console.log("Contenu du fichier :",txtContent);

console.table(fs.readdirSync(baseFolder));

fs.unlinkSync(`${baseFolder}/nouveau_fichier.txt`);

fs.rmdirSync(baseFolder);
