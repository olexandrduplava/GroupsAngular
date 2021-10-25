import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { GroupComponent } from './group/group.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
