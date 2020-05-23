
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppUserListsComponent } from './app-user-lists/app-user-lists.component';
import { AppUserProfileComponent } from './app-user-profile/app-user-profile.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppContainerComponent } from './app-container/app-container.component';

// App services
import { UsersService } from './users.service';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent,
    AppUserListsComponent,
    AppUserProfileComponent,
    AppSidebarComponent,
    AppContainerComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
