const bookinfos = require("./bookInfos");

console.log("Title: " + bookinfos.title);
console.log("Author: " + bookinfos.author);
console.log("Year: " + bookinfos.year);
console.log("Genre: " + bookinfos.genre);
console.log("Pages: " + bookinfos.pages);
console.log("Publisher: " + bookinfos.publisher);
console.log("ISBN: " + bookinfos.ISBN);
console.log("Language: " + bookinfos.language);
console.log("Description: " + bookinfos.description);
console.log("Cover Image: " + bookinfos.coverImage);
console.log("Overall informations : ");
console.table(bookinfos);