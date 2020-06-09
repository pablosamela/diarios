import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Taxonomy } from 'src/app/models/taxonomy';
import { TaxonomyTypes } from 'src/app/models/taxonomy-types.enum';

@Component({
  selector: 'app-taxonomy',
  templateUrl: './taxonomy.component.html'
})
export class TaxonomyComponent implements OnInit {
  taxonomies$: Observable<Taxonomy[]>;
  taxonomyType: string;
  taxonomyTypes = TaxonomyTypes;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taxonomyType = params.get('taxonomy');
      this.taxonomies$ = this.dataService.getTaxonomy(params.get('taxonomy'));
    });
  }

}
