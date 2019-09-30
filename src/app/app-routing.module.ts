import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AllItemsComponent } from './all-items/all-items.component';

const routes: Routes = [
  {
    path: '',
    component: AllItemsComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/item/:id',
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
