import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { InvestmentService } from '../../services/investment.service';
import { InvestmentInput } from '../../models/investment-input.model';

@Component({
  selector: 'user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedReturn = '5'
  enteredDuration = '10'

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({    
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    })
    
    this.enteredInitialInvestment = '0'
    this.enteredAnnualInvestment = '0'
    this.enteredExpectedReturn = '5'
    this.enteredDuration = '10'
  }
}
