import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Taxonomy } from './models/taxonomy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'diarios';

  constructor(private dataService: DataService){

  }
  ngOnInit(){
  }
}
