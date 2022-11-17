/* eslint-disable no-undef */
const lis = () => {
  all = [];
  const ad = (todoItem) => {
    all.push(todoItem);
  };
  const mac = (index) => {
    all[index].completed = true;
  };

  let day = new Date().toLocaleDateString("en-CA");
  // let day = new Date().toISOString().split("T")[0];

  const odue = () => {
    return all.filter((todo) => {
      return todo.dueDate < day;
    });
  };

  const duet = () => {
    return all.filter((todo) => {
      return todo.dueDate === day;
    });
  };

  const duel = () => {
    return all.filter((todo) => {
      return todo.dueDate > day;
    });
  };

  const todl = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == day ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    ad,
    mac,
    odue,
    duet,
    duel,
    todl,
  };
};

module.exports = lis;

