import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxonomy } from 'src/app/models/taxonomy';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-taxonomy-box',
  templateUrl: './taxonomy-box.component.html'
})
export class TaxonomyBoxComponent implements OnInit {
  @Input ('taxonomyType')  taxonomyType: string;

  taxonomies$: Observable<Taxonomy[]>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.taxonomies$ = this.dataService.getTaxonomy(this.taxonomyType);
   }

}
