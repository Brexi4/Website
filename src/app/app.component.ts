import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 title = 'MINKIA ANGULAR';
 appTitle = 'appTitle';
 tooltip = 'tooltip';
 inputVar: string;

 changeTitle() {
   this.appTitle = 'Title changed';
   this.inputVar = 'input';
 }
   showAlert() { 
    alert(this.inputVar);
  }
 }

