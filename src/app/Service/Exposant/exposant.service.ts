import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exposant} from "../../Model/Exposant/exposant.model";

@Injectable({
  providedIn: 'root'
})
export class ExposantService {

  constructor(private httpClient: HttpClient) {
  }

  public getExposants(): Observable<Array<Exposant>> {
    return this.httpClient.get<Array<Exposant>>("http://localhost:8080/exposant/getAll")
  }

  public deleteExposant(exposant: Exposant) {
    return this.httpClient.delete<any>(`http://localhost:8080/exposant/del/${exposant.exposantId}`);
  }


  public searchExposant(keyword: string): Observable<Array<Exposant>> {
    return this.httpClient.get<Array<Exposant>>(`http://localhost:8080/exposant/search?keyword=${keyword}`)
  }

  getExposantById(exposantId: number):Observable<Exposant> {
    return this.httpClient.get<Exposant>(`http://localhost:8080/exposant/getByid/${exposantId}`);
  }

  updateExposant(exposant: Exposant):Observable<Exposant> {
    return this.httpClient.put<Exposant>(`http://localhost:8080/exposant/update/${exposant.exposantId}`,exposant);
  }
}
