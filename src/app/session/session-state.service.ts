import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BudgetItem {
  category: string = undefined;
  amount: number = undefined;
  date: Date = undefined;
  description?: string;
}

class Session {
  budgetItems: BudgetItem[] = [];

  // todo: fill in with other attributes
}

@Injectable({
  providedIn: 'root'
})
export class SessionState {
  session$ = new BehaviorSubject<Session>(new Session());

  get budgetItems(): Observable<BudgetItem[]> {
    const localSession = this.session$.asObservable();

    return localSession.pipe(map(session => session.budgetItems));
  }


  addBudgetItem(budgetItem: BudgetItem) {
    const newSession = this.session$.getValue();
    newSession.budgetItems = [...newSession.budgetItems, budgetItem];

    this.session$.next(newSession);
  }
}
