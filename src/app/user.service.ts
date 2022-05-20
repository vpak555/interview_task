import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { License, User, UserWithLicenses } from './models';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserWithLicenses(id: string): Observable<UserWithLicenses> {
    return this.http.get<User>(`/users/${id}`).pipe(
      mergeMap((user: User): Observable<UserWithLicenses> => {
        const params = new HttpParams({ fromString: 'id=' + user.licenses.join('&id=') });
        return this.http.get<License[]>('/licenses', { params: params }).pipe(
          map((licenses: License[]) => {
            return {
              name: user.name,
              age: user.age,
              licenses
            }
          })
        )
      }),
    )
  }
}
