import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../interfaces/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);

  public registerAccount(payload: RegisterPayload): Observable<any> {
    return this._http.post('api/register', payload);
  }
}
