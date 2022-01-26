import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  todoList: Array<any> = [];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
  }

  getTodo() {
    return this.todoList;
  }

  getSpecificTodo(index: number) {
    return this.todoList[index];
  }
  addTodo(item: string) {
    this.todoList.push(item);
    this.saveState();
  }
  removeTodo(index: number) {
    this.todoList.splice(index, 1);
    this.saveState();
  }
  editTodo(index: number, item: string) {
    this.todoList.splice(index, 1, item);
    this.saveState();
  }
  saveState() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
