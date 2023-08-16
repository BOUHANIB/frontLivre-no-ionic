  import { Injectable } from '@angular/core';
  import {HttpClient, HttpHeaders} from "@angular/common/http";
  import {catchError, Observable, throwError} from "rxjs";
  import {Livre} from "../../Model/Livre/livre.model";

  @Injectable({
    providedIn: 'root'
  })
  export class LivreService {

    constructor(private httpClient: HttpClient) {
    }

    public getLivres(): Observable<Array<Livre>> {
      return this.httpClient.get<Array<Livre>>("http://localhost:8080/livre/view")
    }

    public deleteLivre(livre: Livre) {
      return this.httpClient.delete<any>(`http://localhost:8080/livre/del/${livre.livreId}`);
    }

    public searchLivre(keyword: string): Observable<Array<Livre>> {
      return this.httpClient.get<Array<Livre>>(`http://localhost:8080/livre/search?keyword=${keyword}`);
    }

    getLivreById(livreId: number):Observable<Livre> {
      return this.httpClient.get<Livre>(`http://localhost:8080/livre/view/${livreId}`);
    }

    updateLivre(livre: Livre):Observable<Livre> {
      return this.httpClient.put<Livre>(`http://localhost:8080/livre/update/${livre.livreId}`,livre);
    }

  }
