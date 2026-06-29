import greet from "./index";

test("greet() says Hello World by default", () => {
  expect(greet()).toBe("Hello, World");
});

test("greet() uses the provided name", () => {
  expect(greet("CloudScaile")).toBe("Hello, CloudScaile");
});