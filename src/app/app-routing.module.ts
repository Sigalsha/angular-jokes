import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './pages/jokes/jokes.component';

const routes: Routes = [
  /* { path: '', redirectTo: '/login', pathMatch: 'full' }, */
  { path: 'login', component: LoginComponent },
  { path: '', component: JokesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
