import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import { JokesComponent } from './pages/jokes/jokes.component';
import { JokesGalleryComponent } from './components/jokes-gallery/jokes-gallery.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { JokeModalComponent } from './components/joke-modal/joke-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JokesComponent,
    JokesGalleryComponent,
    HeaderComponent,
    JokeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
