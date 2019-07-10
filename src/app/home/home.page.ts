import { Component } from '@angular/core';
import { SessionState } from '../session/session-state.service';
import { Observable } from 'rxjs';
import { BudgetItem } from '../session/session-state.typings';
import { AuthenicationService } from '../services/authenication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  budgetItems$: Observable<BudgetItem[]>;
  constructor(private sessionState: SessionState, private authService: AuthenicationService) {
    this.budgetItems$ = sessionState.budgetItems;
  }

  logout() {
    this.authService.logout();
  }
}
