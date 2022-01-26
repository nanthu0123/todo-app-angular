import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo: string = '';


  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.addTodo(this.todo);
    // reset input value
    this.todo = '';
  }

}
