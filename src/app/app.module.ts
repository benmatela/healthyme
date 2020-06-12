import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntriesComponent } from './components/entries/entries.component';
import { EntriesService } from './components/entries/entries.service';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';
import { StatsComponent } from './components/entries/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent,
    NewEntryComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
