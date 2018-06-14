import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {Anmeldung} from "../anmeldungen/anmeldung";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "../message.service";
import {of} from "rxjs/observable/of";

@Injectable()
export class DataProviderService {

  private baseURL: string = environment.apiUrl;
  private alleAnmeldungen = new BehaviorSubject(null);
  private selectedAnmeldung = new BehaviorSubject(null);


  constructor(private http: HttpClient, private messageService: MessageService) {
  };


  getAllAnmeldungen(seletedDate: Date){
    console.log('DataProviderService.getAllAnmeldungen called with param selectedDate: '+ seletedDate);
    let actionURL = this.baseURL +  'anmeldungen_by_Date/' + seletedDate.getTime();
    let data = this.http.get<Anmeldung[]>(actionURL)
      .pipe(
        tap(Anmeldung => this.log(`fetched Anmeldung`)),
        catchError(this.handleError('getAllAnmeldungen', []))
      );
    this.alleAnmeldungen.next(data);
    console.log('DataProviderService.getAllAnmeldungen finished with data: '+ data);
    return this.alleAnmeldungen.asObservable();
  }

  selectAnmeldungDetail<Anmeldung>(id: number): Observable<Anmeldung> {
    console.log('DataProviderService.selectAnmeldungDetail called with param id: '+ id);
    let actionURL = this.baseURL + "anmeldungen/" + id;
    console.log("Requested-Id: " + id);
    let data = this.http.get<Anmeldung>(actionURL)
      .pipe(
      tap(Anmeldung => this.log(`fetched getSelectedAnmeldung`)),
      catchError(this.handleError('getSelectedAnmeldung', []))
    );
    this.selectedAnmeldung.next(data);
    return this.selectedAnmeldung.asObservable();
  }

  getSelectedAnmeldung() {
    return this.selectedAnmeldung.asObservable();
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
