import { Component } from '@angular/core'
import { AppHeaderComponent } from './cmps/app-header/app-header.component'
import { UserInputComponent } from './cmps/user-input/user-input.component'
import { InvestmentInput } from './models/investment-input.model'
import { InvestmentResultsComponent } from "./cmps/investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData?: {
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
  }[]

  onCalculateInvestmentResults( data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment} = data
    const annualData = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
      const year = i + 1
      const interestEarnedInYear = investmentValue * (expectedReturn / 100)
      investmentValue += interestEarnedInYear + annualInvestment
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      })
    }

    this.resultsData = annualData
  }
}
