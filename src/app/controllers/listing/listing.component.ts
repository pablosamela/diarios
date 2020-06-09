import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/models/entity';
import * as TaxonomyTypes from 'src/app/models/taxonomy-types.enum';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
  entities$: Observable<Entity[]>;
  title: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = TaxonomyTypes.getTaxonomyTypes(params.get('taxonomy'));
      this.entities$ = this.dataService.getEntityByTaxonomy(
        params.get('taxonomy'),
        params.get('id')
      );
    });
  }

}
