import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';

import { UsersService } from './services/users.service';
import { ItemsService} from './services/items.service';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { NameFilter } from '../app/pipes/nameFilter.pipe';
import { AllItemsComponent } from './all-items/all-items.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ItemsComponent,
    ItemDetailsComponent,
    NameFilter,
    AllItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    UsersService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
