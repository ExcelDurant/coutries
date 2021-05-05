import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'home', component:AppComponent},
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) },
  { path:'', redirectTo:'/home', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
