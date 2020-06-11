import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EntriesComponent } from './components/entries/entries.component';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'entries', component: EntriesComponent},
  { path: 'new-entry', component: NewEntryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
