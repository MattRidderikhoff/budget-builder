import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BudgetItem, Category, Session } from './session-state.typings';

@Injectable({
  providedIn: 'root'
})
export class SessionState {
  session = new BehaviorSubject<Session>(new Session());

  get budgetItems(): Observable<BudgetItem[]> {
    const session$ = this.session.asObservable();

    return session$.pipe(map(session => session.budgetItems));
  }

  get categories(): Observable<Category[]> {
    const session$ = this.session.asObservable();

    return session$.pipe(map(session => session.categories));
  }

  getCategory(name: string): Category {
    const session = this.session.getValue();

    const category = session.categories.find(item => item.name === name);
    return { ...category };
  }

  addBudgetItem(budgetItem: BudgetItem) {
    const newSession = this.session.getValue();
    newSession.budgetItems = [...newSession.budgetItems, budgetItem];

    this.session.next(newSession);
  }

  addCategory(category: Category) {
    const newSession = this.session.getValue();
    newSession.categories = [...newSession.categories, category];

    this.session.next(newSession);
  }
}
