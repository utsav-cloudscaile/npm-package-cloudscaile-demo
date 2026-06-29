// src/index.ts
function greet(name = "World") {
  return `Hello, ${name}!`;
}
var index_default = greet;
export {
  index_default as default,
  greet
};
