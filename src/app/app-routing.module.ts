import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntriesComponent } from './components/entries/entries.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'entries', component: EntriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
