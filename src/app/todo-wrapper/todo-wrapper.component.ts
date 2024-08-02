import { Component } from '@angular/core';

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
export class TodoWrapperComponent {
  tasks: Task[] = [];

  addTask(task: string) {
    this.tasks.push({ text: task, completed: false });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
