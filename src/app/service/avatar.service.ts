import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AvatarModel} from '../../model/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) {
  }

  getAvatarById(id: string | null): Observable<AvatarModel> {
    return this.http.get<AvatarModel>('http://localhost:8080/api/avatar/' + id).pipe(
      map(l => l),
    );
  }
  getAllAvatar(): Observable<Array<AvatarModel>> {
    return this.http.get<Array<AvatarModel>>('http://localhost:8080/api/avatar/').pipe(
      map(l => l),
    );
  }
}
