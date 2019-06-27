import { Component, OnInit } from '@angular/core';
import { BudgetItem, SessionState, Category } from '../session/session-state.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  categories$: Observable<Category[]>;
  categories: Category[];
  budgetItem: BudgetItem = new BudgetItem();

  constructor(private sessionState: SessionState, private router: Router) {}

  ngOnInit() {
    this.categories$ = this.sessionState.categories;
    this.categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }
  onSubmit() {
    console.log(this.budgetItem);
    this.sessionState.addBudgetItem(this.budgetItem);
    this.budgetItem = new BudgetItem();

    this.router.navigateByUrl('/home');
  }
  }
