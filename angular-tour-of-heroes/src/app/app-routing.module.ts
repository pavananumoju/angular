import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'detail/:id', component: HeroDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }