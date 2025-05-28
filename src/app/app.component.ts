import { Component } from '@angular/core';
import { AppHeaderComponent } from "./cmps/app-header/app-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent],
})
export class AppComponent {}
