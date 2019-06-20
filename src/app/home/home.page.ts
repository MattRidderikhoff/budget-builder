import { Component } from '@angular/core';
import { BudgetItem, SessionState } from '../session/session-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  budgetItems$: Observable<BudgetItem[]>;

  constructor(private sessionState: SessionState) {
    this.budgetItems$ = sessionState.budgetItems;
  }
}
