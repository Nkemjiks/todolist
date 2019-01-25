import { decorate, observable, configure, action, computed } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  todoList = [{ item: "John Doe", completed: false }];

  pushTodo(item) {
    const todo = {
      item,
      completed: false
    };
    this.todoList.push(todo);
  }

  updateTodo(value) {
    const index = this.todoList.findIndex(
      todoListItem => todoListItem.item === value
    );
    this.todoList[index].completed = true;
    this.saveToLocalStorage();
  }

  get completedTodo() {
    return this.todoList.filter(e => e.completed === true);
  }

  get ongoingTodo() {
    return this.todoList.filter(e => e.completed === false);
  }

  saveToLocalStorage() {
    const todoList = this.todoList;
    localStorage.setItem("todos", JSON.stringify({ todoList }));
    return null;
  }

  updateState(storage) {
    this.todoList = storage.todoList;
  }
}

decorate(Store, {
  todoList: observable,
  pushTodo: action,
  updateTodo: action,
  updateState: action,
  completedTodo: computed,
  ongoingTodo: computed,
  saveToLocalStorage: action
});

const appStore = new Store();

export default appStore;
