import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  task: string = '';
  @Output() newTask = new EventEmitter<string>();

  addTask() {
    if (this.task.trim()) {
      this.newTask.emit(this.task);
      this.task = '';
    }
  }
}
