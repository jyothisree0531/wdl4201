/* eslint-disable no-undef */
const lis = require("../todo");
let day = new Date().toLocaleDateString("en-CA");

const { all, mac, ad, odue, duet, duel } = lis();

describe("Testing todo list", () => {
  beforeAll(() => {
    ad({
      title: "watch webseries",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("adding a todo", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    ad({
      title: "manifesting things daily",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as done", () => {
    expect(all[0].completed).toBe(false);
    mac(0);
    expect(all[0].completed).toBe(true);
  });

  test("todos shouuld be retrieved", () => {
    let loT = odue();

    expect(
      loT.every((todo) => {
        return todo.dueDate < day;
      })
    ).toBe(true);
  });

  test("due for today should be retrieved", () => {
    let loT = duet();

    expect(
      loT.every((todo) => {
        return todo.dueDate === day;
      })
    ).toBe(true);
  });

  test("due later todos retrieved", () => {
    let loT = duel();

    expect(
      loT.every((todo) => {
        return todo.dueDate > day;
      })
    ).toBe(true);
  });
});
