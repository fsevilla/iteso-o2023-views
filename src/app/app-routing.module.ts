import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { GalleryListComponent } from './pages/gallery/gallery-list/gallery-list.component';
import { CreateGalleryComponent } from './pages/gallery/create-gallery/create-gallery.component';
import { GalleryDataComponent } from './pages/gallery/gallery-data/gallery-data.component';
import { EditGalleryComponent } from './pages/gallery/edit-gallery/edit-gallery.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';
import { RoleGuard } from './shared/guards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, RoleGuard], data: {
    role: 'admin'
  } },
  { path: 'photos', component: GalleryComponent, canActivate: [AuthGuard, RoleGuard], children: [
    { path: '', component: GalleryListComponent }, 
    { path: 'create', component: CreateGalleryComponent },
    { path: ':id', component: GalleryDataComponent },
    { path: ':id/edit', component: EditGalleryComponent }
  ], data: {
    role: 'user'
  } },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
