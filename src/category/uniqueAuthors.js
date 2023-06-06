import authors from "./authorList"

const names = {};
const uniqueAuthors = authors.filter((author) => {
  if (names[author.name]) {
    return false;
  } else {
    names[author.name] = true;
    return true;
  }
});

console.log(uniqueAuthors);