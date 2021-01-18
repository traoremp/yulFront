import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Square} from '../../model/square';
import {map} from 'rxjs/operators';
import {MapModel} from '../../model/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {
  }

  getAllMAp(): Observable<Square[][]> {
    return this.http.get<Square[][]>('api/livres').pipe(
      map(l => l),
    );
  }

  getMapById(id: string | null): Observable<MapModel> {
    return this.http.get<MapModel>('http://localhost:8080/api/map/' + id).pipe(
      map(l => l),
    );
  }

}
