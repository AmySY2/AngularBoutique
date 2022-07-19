import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class AuthService {

  public _url: string = environment.adresseServeur ;

  constructor(private http: HttpClient) { 

   }


    ///////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////// AGENTS    ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////

    listProduit(): Observable<any> {
      return this.http.get(this._url + 'admin/parametrage/gerant');
    }

    saveProduit(body:any): Observable<any> {
      return this.http.post(this._url + 'admin/parametrage/gerant', body);
    }

    editProduit(id:number, body:any): Observable<any> {
      return this.http.put(this._url + 'admin/parametrage/gerant/'+id, body);
    }

    deleteProduit(id:number): Observable<any> {
      return this.http.delete(this._url + 'admin/parametrage/gerant/'+id);
    }


}
