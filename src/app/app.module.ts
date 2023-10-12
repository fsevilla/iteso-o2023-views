import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { GalleryListComponent } from './pages/gallery/gallery-list/gallery-list.component';
import { CreateGalleryComponent } from './pages/gallery/create-gallery/create-gallery.component';
import { EditGalleryComponent } from './pages/gallery/edit-gallery/edit-gallery.component';
import { GalleryDataComponent } from './pages/gallery/gallery-data/gallery-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    GalleryComponent,
    NotFoundComponent,
    UsersComponent,
    GalleryListComponent,
    CreateGalleryComponent,
    EditGalleryComponent,
    GalleryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
