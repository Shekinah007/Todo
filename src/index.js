import {
  home,
  addButton,
  detailsButton,
  detailsWindow,
  overlay,
  closeDetailsButton,
  closeEditButton,
  editWindow,
  editButton,
  addTaskButton,
  todoContent,
} from "./domComponents/getElements";

import todoComponent from "./domComponents/todoItemComponent";
import homeProjectsArray from "./projectData";

import {
  toggleDisplay,
  openWindow,
  closeWindow,
} from "./domComponents/utilityFunctions";

addTaskButton.addEventListener("click", () => {
  homeProject.addTask({
    title: "New Tack Here",
    details: "new Dummny Task",
    priority: "High",
    dueDate: "13/10/4408",
    complete: false,
    project: "home",
  });
});

class Project {
  constructor(arrayOfTodos) {
    this.arrayOfTodos = arrayOfTodos;
  }

  displayTasks() {
    this.arrayOfTodos.forEach((item) => {
      todoContent.append(
        todoComponent(item.title, item.details, item.priority, item.dueDate)
      );
    });
  }

  addTask(object) {
    this.arrayOfTodos.push(object);
    todoContent.innerHTML = "";
    // toggleDisplay(overlay, editWindow);
    openWindow(editWindow);
    this.displayTasks();
  }

  addNewTaskWindow() {}
  //   editTask() {}
}

const homeProject = new Project(homeProjectsArray);
homeProject.displayTasks();
