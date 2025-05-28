import { Component } from '@angular/core'
import { AppHeaderComponent } from './cmps/app-header/app-header.component'
import { UserInputComponent } from './cmps/user-input/user-input.component'
import { InvestmentResultsComponent } from "./cmps/investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {


}
