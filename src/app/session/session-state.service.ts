import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class BudgetItem {
  category: Category = undefined;
  amount: number = undefined;
  date: Date = undefined;
  description?: string;
}

export class Category {
  name: string = undefined;
  amount: number = undefined;
  icon: string = undefined;
}
class Session {
  budgetItems: BudgetItem[] = [];
  categories: Category[] = [{name: 'Groceries', icon: 'cart', amount: 1000}];
  // todo: fill in with other attributes
}

@Injectable({
  providedIn: 'root'
})
export class SessionState {
  session = new BehaviorSubject<Session>(new Session());

  get budgetItems(): Observable<BudgetItem[]> {
    const sessionObservable = this.session.asObservable();

    return sessionObservable.pipe(map(session => session.budgetItems));
  }
  get categories(): Observable<Category[]> {
    const sessionObservable = this.session.asObservable();

    return sessionObservable.pipe(map(session => session.categories));
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
