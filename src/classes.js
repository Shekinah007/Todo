import { todoContent } from "./domStuff/getElements";
import todoComponent from "./domStuff/components/todoItemComponent";
import { openWindow } from "./domStuff/utilityFunctions";
import { closeWindow } from "./domStuff/utilityFunctions";
import { editWindow } from "./domStuff/getElements";

class Project {
  constructor(arrayOfTodos, nameOfProject) {
    this.arrayOfTodos = arrayOfTodos;
    this.nameOfProject = nameOfProject;
  }

  displayTasks() {
    todoContent.innerHTML = "";
    this.arrayOfTodos.forEach((item, index) => {
      todoContent.append(
        todoComponent(
          item.title,
          item.details,
          item.priority,
          item.dueDate,
          item.project,
          index
        )
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.unshift(object);
    todoContent.innerHTML = "";
    this.displayTasks();
    closeWindow(editWindow);
  }

  addTaskWindow() {
    openWindow(editWindow);
  }

  deleteTask(index) {
    this.arrayOfTodos.splice(index, 1);
    this.displayTasks();
  }
}

export default Project;
