import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material-modules';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AccountComponent } from './components/account/account.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    CategoriesComponent,
    SidenavComponent,
    AccountComponent,
    FavoritesComponent,
    MessagesComponent,
    SettingsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
