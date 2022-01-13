import { Component } from '@angular/core';

@Component({
  selector: 'nx-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-application';
  isShow = true;
  showMenu(): void {
    this.isShow = !this.isShow;
  }
}
