import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taxonomy } from '../models/taxonomy';
import { Entity } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private domain = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getTaxonomy(taxonomy: string): Observable<Taxonomy[]>{
    return this.http.get<Taxonomy[]>(`${this.domain}/${taxonomy}`);
  }

  getEntityByTaxonomy(taxonomy: string, id: string): Observable<Entity[]>{
    return this.http.get<Entity[]>(`${this.domain}/entities/${taxonomy}/${id}`);
  }

  getEntityById(id: string): Observable<Entity> {
    return this.http.get<Entity>(`${this.domain}/entities/one/${id}`);
  }
}
