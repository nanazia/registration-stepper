import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IGroup } from './IGroup';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

    private url: string = environment.apiPath;

    public getGroups(): Observable<IGroup[]> {
      return new Observable((observer) => {
          this.http.get<IGroup[]>(this.url).subscribe(res => {
            observer.next(res);
            observer.complete();
          });
    });
    }

}
