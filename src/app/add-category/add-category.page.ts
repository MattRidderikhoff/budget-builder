import { Component, OnInit } from '@angular/core';
import { Category } from '../session/session-state.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  category: Category = new Category();
  icons: string[] = ['basket', 'cart', 'beer'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }
}
