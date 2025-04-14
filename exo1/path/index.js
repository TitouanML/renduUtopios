const path = require('path');

const searchedInFolder = 'documents';
const searchedFileName = 'rapport.txt';

const research = path.join(__dirname, searchedInFolder, searchedFileName);

const absolutePath = path.resolve(research);

const isTxtFile = path.extname(absolutePath) === '.txt';

const searchedFileFolder = path.dirname(absolutePath);

const pathObject = path.parse(absolutePath);

const normalisedPath = path.normalize(absolutePath);

console.log("Folder we're searching in:", searchedInFolder);
console.log("File we're searching for:", searchedFileName);
console.log("Absolute path:", absolutePath);
console.log("Is it a .txt file?", isTxtFile ? 'Yes' : 'No');
console.log("Folder of the file:", searchedFileFolder);
console.table(pathObject);
console.log("Normalised path:", normalisedPath);