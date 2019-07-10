import { Component } from '@angular/core';
import { SessionState } from '../session/session-state.service';
import { Router } from '@angular/router';
import { Category } from '../session/session-state.typings';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage {
  category: Category = new Category();
  icons: string[] = ['basket', 'cart', 'beer'];
  constructor(private sessionState: SessionState, private router: Router) {}

  onSubmit() {
    this.sessionState.addCategory(this.category);
    this.category = new Category();

    this.router.navigateByUrl('/members/home');
  }
}
