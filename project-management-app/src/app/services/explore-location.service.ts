import { ExploreTeam } from './../models/explore-team';
import { ExploreProject } from './../models/explore-project';
import { Injectable } from '@angular/core';
import { Location } from './../models/explore-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExploreLocationService {

  constructor(private http: HttpClient) { }
  getExploreProjects(): Observable<ExploreProject[]> {
    return this.http.get<ExploreProject[]>('/api/project.json');
}
}