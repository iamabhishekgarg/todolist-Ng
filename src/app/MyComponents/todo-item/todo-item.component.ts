import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    
  }
  ngOnInit(): void {
  }
  onclick(todo: Todo){
    this.todoDelete.emit(todo);
    alert("Are You Sure?")
  }
  onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo);
  }
  faTimes = faTimes;
}
