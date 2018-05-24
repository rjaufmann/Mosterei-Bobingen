import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {of} from "rxjs/observable/of";


import {Anmeldung} from "./anmeldung";
import {environment} from "../../environments/environment";
import {MessageService} from "../message.service";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AnmeldungService {

  private actionUrl: string;

  constructor(private http: HttpClient, private messageService: MessageService) {
    let seletedDate = new Date();
    seletedDate.setFullYear(2017,7,26);
    this.actionUrl = environment.apiUrl + 'anmeldungen_by_Date/' + seletedDate.getTime();
  }


  getAllAnmeldungen(): Observable<Anmeldung[]> {
    return this.http.get<Anmeldung[]>(this.actionUrl)
      .pipe(
        tap(Anmeldung => this.log(`fetched Anmeldung`)),
        catchError(this.handleError('getAllAnmeldungen', []))
      );
  }


  public getSingle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("handleError: " + error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AnmeldungService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AnmeldungService: ' + message);
  }
}

