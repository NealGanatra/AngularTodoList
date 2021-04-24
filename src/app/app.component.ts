import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CWH-TODO-LIST';
  constructor(){
setTimeout(() => {
  this.title='Ganatras Empire';
}, 4000);
  }
};
