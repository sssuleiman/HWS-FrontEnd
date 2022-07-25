import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigupComponent } from './pages/sigup/sigup.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import {MatDrawerContent} from '@angular/material/sidenav'; 
import { MatDialogModule } from '@angular/material/dialog'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListUserComponent,
    PageNotFoundComponent,
    SigupComponent,
    UsersComponent,
    CreateUserComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,    
    // MatDrawerContent,
    MatToolbarModule,
    // MatFormField,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    LayoutModule,
    // HttpClient,
    MatMenuModule,
    MatFormFieldModule,
    // MatFormFieldControl,
    MatGridListModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
