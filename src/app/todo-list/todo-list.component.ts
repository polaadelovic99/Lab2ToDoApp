import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: any[] = [];
  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() completeTaskEvent = new EventEmitter<number>();

  emitDeleteTask(index: number) {
    this.deleteTaskEvent.emit(index);
  }

  emitCompleteTask(index: number) {
    this.completeTaskEvent.emit(index);
  }
}
