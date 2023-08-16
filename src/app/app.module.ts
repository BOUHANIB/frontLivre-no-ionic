import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExposantComponent } from './Component/Exposant/exposant/exposant.component';
import { LivreComponent } from './Component/Livre/livre/livre.component';
import { HomeComponent } from './Component/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditExposantComponent } from './Component/Exposant/edit-exposant/edit-exposant.component';
import { EditLivreComponent } from './Component/Livre/edit-livre/edit-livre.component';
import { MapComponent } from './Component/map/map.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ExposantComponent,
    LivreComponent,
    HomeComponent,
    EditExposantComponent,
    EditLivreComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
