import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  localItem;
  constructor() { 
this.localItem=localStorage.getItem("todos");
if(this.localItem==null){
this.todos=[]
}
else{
this.todos=JSON.parse(this.localItem);
}


  }


  

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
    console.log("inside addTodo");
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  markTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
  
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log("inside markTodo");
  }
}
