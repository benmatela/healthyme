import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntriesComponent } from './components/entries/entries.component';
import { EntriesService } from './components/entries/entries.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
