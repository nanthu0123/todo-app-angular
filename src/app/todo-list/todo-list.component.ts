import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Array<any> = [];
  faIcons = { faTrash, faEdit };

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.todoList = this.service.getTodo();
  }
  onRemove(index: number) {
    this.service.removeTodo(index);
  }
  onEdit(index: number) {
    let item = prompt('enter new todo', this.service.getSpecificTodo(index));
    if (item) this.service.editTodo(index, item?.toString());
  }

}
