import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SigupComponent } from './pages/sigup/sigup.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
      path:'',
      component: LoginComponent,
  },
  {
      path : 'pages/sigup',
      component: SigupComponent
  },
  {
      path: 'mainlayout',
      component:MainLayoutComponent,
      children:[
          {
              path: '',
              component:HomeComponent
          },
          {
              path: 'mainlayout/create-user',
              component:CreateUserComponent
          },
          {
              path: 'mainlayout/home',
              component:HomeComponent
          },
          {
              path:'mainlayout/sigup',
              component: SigupComponent
          },
          {
              path:'mainlayout/admin-layout',
              component: AdminLayoutComponent   
          },
          {
              path:'mainlayout/list-users',
              component: ListUserComponent   
          },
          {
              path:'mainlayout/login',
              component: LoginComponent       
          },
          {
              path: 'mainlayout/users',
              component: UsersComponent
          }
          
      ]
  },
  {
      path:'**',
      component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
