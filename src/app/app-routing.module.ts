import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxonomyComponent } from './controllers/taxonomy/taxonomy.component';
import { ListingComponent } from './controllers/listing/listing.component';
import { HomeComponent } from './controllers/home/home.component';
import { EntityComponent } from './controllers/entity/entity.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listing/:taxonomy/:id', component: ListingComponent },
  { path: 'taxonomy/:taxonomy', component: TaxonomyComponent },
  { path: 'entity/:id', component: EntityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
