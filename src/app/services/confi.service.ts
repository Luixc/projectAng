import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:3000/problems';

getConfig() {
  return this.http.get(this.configUrl);
}
}