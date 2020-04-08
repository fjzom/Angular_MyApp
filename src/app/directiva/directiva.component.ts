import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  courseList: string[] = ['java', 'c', 'python'];
  btnShowHide: boolean = true;

  constructor() { }

  showHide(): void {
    this.btnShowHide = (this.btnShowHide) ? false : true;
  }
}
