import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './controllers/home/home.component';
import { TaxonomyComponent } from './controllers/taxonomy/taxonomy.component';
import { ListingComponent } from './controllers/listing/listing.component';
import { TaxonomyBoxComponent } from './controllers/taxonomy-box/taxonomy-box.component';
import { EntityComponent } from './controllers/entity/entity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaxonomyComponent,
    ListingComponent,
    TaxonomyBoxComponent,
    EntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
