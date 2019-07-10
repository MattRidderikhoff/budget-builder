import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: '../home/home.module#HomePageModule'
  },
  {
    path: 'add-item',
    loadChildren: '../add-item/add-item.module#AddItemPageModule'
  },
  {
    path: 'add-category',
    loadChildren: '../add-category/add-category.module#AddCategoryPageModule'
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: '../register/register.module#RegisterPageModule'
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MemberRoutingModule { }
