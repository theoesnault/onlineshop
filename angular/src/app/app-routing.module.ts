import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CategoriesComponent } from './components/categories/categories.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'account', component: AccountComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
