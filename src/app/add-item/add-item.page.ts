import { Component, OnInit } from '@angular/core';
import { SessionState } from '../session/session-state.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BudgetItem, Category } from '../session/session-state.typings';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  categories$: Observable<Category[]>;
  categories: Category[];

  categoryName;
  budgetItem: BudgetItem = new BudgetItem();

  constructor(private sessionState: SessionState, private router: Router) {}

  ngOnInit() {
    this.categories$ = this.sessionState.categories;

    this.categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit() {
    this.budgetItem.category = this.sessionState.getCategory(this.categoryName);

    this.sessionState.addBudgetItem(this.budgetItem);
    this.budgetItem = new BudgetItem();

    this.router.navigateByUrl('/home');
  }
}
