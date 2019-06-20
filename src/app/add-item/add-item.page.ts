import { Component } from '@angular/core';
import { BudgetItem, SessionState } from '../session/session-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {
  categories: string[] = ['food', 'bill', 'fun'];
  budgetItem: BudgetItem = new BudgetItem();

  constructor(private sessionState: SessionState, private router: Router) {}

  onSubmit() {
    this.sessionState.addBudgetItem(this.budgetItem);
    this.budgetItem = new BudgetItem();

    this.router.navigateByUrl('/home');
  }
}
