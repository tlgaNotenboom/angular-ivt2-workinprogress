import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from, of} from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { GeoPoint } from '../models/geopoint';
import { SierendElement } from '../models/sierendelement';

@Injectable({
  providedIn: 'root'
})
export class SierendeElementenService {

  readonly url = 'https://services7.arcgis.com/21GdwfcLrnTpiju8/arcgis/rest/services/Sierende_elementen/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
  //readonly url = 'https://services7.arcgis.com/21GdwfcLrnTpiju8/arcgis/rest/services/Sierende_elementen/FeatureServer/0/query'

  constructor(private httpClient: HttpClient) { }

  // getSE() : Observable<number[]> {
  //   return of([10,11,12]);
  // }

  getSierendeElementen(): Observable<GeoPoint[]>{

    let headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    let params = new HttpParams();
    // params.set('where', '1==1');
    // params.set('outFields', '*');
    // params.set('outSR', '4326');
    // params.set('f', 'json');

    return this.httpClient.get<any>(this.url, { headers: headers, params: params } )
      .pipe(
        map( result => {
          let gps : GeoPoint[] = [];
          result.features.forEach(element => {
            let gp = new GeoPoint(element.geometry.x, element.geometry.y)
            gps.push(gp);
          });
          return gps;
        })
      )

  }
}
