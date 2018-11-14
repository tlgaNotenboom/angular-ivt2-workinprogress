import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // https://randomuser.me/api/?results=5
  users: User[]; // = [{ "gender": "male", "name": { "title": "mr", "first": "darren", "last": "wood" }, "location": { "street": "4330 spring hill rd", "city": "mesa", "state": "new mexico", "postcode": 14120, "coordinates": { "latitude": "80.0489", "longitude": "-102.3384" }, "timezone": { "offset": "+4:00", "description": "Abu Dhabi, Muscat, Baku, Tbilisi" } }, "email": "darren.wood@example.com", "login": { "uuid": "3fa6c890-4019-45d8-80f2-b8e97928c8d4", "username": "whitecat757", "password": "246810", "salt": "sbfJtZIX", "md5": "3f26f6ac58ca4794e007dacd90ca0f14", "sha1": "963851ef9b1bad604872ddc11a48826a8cc0dbcf", "sha256": "0771d203a90b08fe4f55e5c0141890baf2a61f404edb13f615ed6280c476ae09" }, "dob": { "date": "1971-12-28T15:58:57Z", "age": 46 }, "registered": { "date": "2016-11-10T03:03:28Z", "age": 1 }, "phone": "(461)-585-8319", "cell": "(838)-144-6013", "id": { "name": "SSN", "value": "180-58-5449" }, "picture": { "large": "https://randomuser.me/api/portraits/men/59.jpg", "medium": "https://randomuser.me/api/portraits/med/men/59.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg" }, "nat": "US" }, { "gender": "female", "name": { "title": "mrs", "first": "kayla", "last": "king" }, "location": { "street": "8241 ti rakau drive", "city": "nelson", "state": "manawatu-wanganui", "postcode": 94527, "coordinates": { "latitude": "-64.7148", "longitude": "168.0685" }, "timezone": { "offset": "+6:00", "description": "Almaty, Dhaka, Colombo" } }, "email": "kayla.king@example.com", "login": { "uuid": "d5d277a0-263e-418d-877f-df868cde85f2", "username": "lazyfish921", "password": "buster1", "salt": "jHb05uaE", "md5": "0168366a10c749570cc8618215b01600", "sha1": "25dfba23989c14ca24cfec9bcf266c85b4d4a36a", "sha256": "245209d317436d8a9fe93790e919be9cf54b27b5bb4a6da7a6605ee4541a8dfa" }, "dob": { "date": "1992-10-31T10:50:20Z", "age": 26 }, "registered": { "date": "2002-07-23T09:27:47Z", "age": 16 }, "phone": "(803)-091-4984", "cell": "(208)-712-1780", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/72.jpg", "medium": "https://randomuser.me/api/portraits/med/women/72.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg" }, "nat": "NZ" }, { "gender": "female", "name": { "title": "ms", "first": "micheline", "last": "roelfsema" }, "location": { "street": "675 billitonkade", "city": "geertruidenberg", "state": "friesland", "postcode": 10069, "coordinates": { "latitude": "6.9695", "longitude": "-172.3450" }, "timezone": { "offset": "-12:00", "description": "Eniwetok, Kwajalein" } }, "email": "micheline.roelfsema@example.com", "login": { "uuid": "fe507284-ee0b-4d05-8f27-ee730db243ce", "username": "goldenbear505", "password": "burrito", "salt": "D4CYPlTF", "md5": "258374d0fe52845df900cc6ea02f3a4e", "sha1": "0881e6665a62d579e703d946906ffd82f64f7633", "sha256": "320d28cf15f99563ed98643f820f14916f1768b0a4ae3ac47d0bfe0173ccc346" }, "dob": { "date": "1969-09-27T06:56:47Z", "age": 49 }, "registered": { "date": "2003-07-24T00:45:14Z", "age": 15 }, "phone": "(056)-599-6935", "cell": "(178)-270-2952", "id": { "name": "BSN", "value": "88079253" }, "picture": { "large": "https://randomuser.me/api/portraits/women/95.jpg", "medium": "https://randomuser.me/api/portraits/med/women/95.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg" }, "nat": "NL" }, { "gender": "female", "name": { "title": "madame", "first": "lidia", "last": "jean" }, "location": { "street": "8594 rue du moulin", "city": "rorbas", "state": "basel-stadt", "postcode": 7897, "coordinates": { "latitude": "-73.1418", "longitude": "85.2339" }, "timezone": { "offset": "+4:00", "description": "Abu Dhabi, Muscat, Baku, Tbilisi" } }, "email": "lidia.jean@example.com", "login": { "uuid": "da9e0114-207e-47da-ab82-50771f09a9fe", "username": "tinytiger260", "password": "zack", "salt": "hUUeEY0v", "md5": "ac36f0ef74f30747e078621c560c50bb", "sha1": "9009dd3ef68bc9d06a6d3cc3c551e3f6dd0ce464", "sha256": "219c655965265ec305e629011f2b5d3a86924583c11e146f4a42f0d7234d84e7" }, "dob": { "date": "1978-04-21T23:59:21Z", "age": 40 }, "registered": { "date": "2006-05-09T03:30:56Z", "age": 12 }, "phone": "(950)-286-8785", "cell": "(333)-859-5272", "id": { "name": "AVS", "value": "756.7565.3426.00" }, "picture": { "large": "https://randomuser.me/api/portraits/women/60.jpg", "medium": "https://randomuser.me/api/portraits/med/women/60.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg" }, "nat": "CH" }, { "gender": "female", "name": { "title": "ms", "first": "susan", "last": "perry" }, "location": { "street": "7175 cork street", "city": "carrick-on-shannon", "state": "fingal", "postcode": 17160, "coordinates": { "latitude": "24.3882", "longitude": "179.8933" }, "timezone": { "offset": "-12:00", "description": "Eniwetok, Kwajalein" } }, "email": "susan.perry@example.com", "login": { "uuid": "481bd3b0-3f84-4de0-be38-639878addb22", "username": "sadduck692", "password": "jarvis", "salt": "gsgCZyte", "md5": "51ff50864fc2f4b49b7a53eac1ec8cbd", "sha1": "da4d1a58353417ea34c7f6d1b1a9ebf2c70be745", "sha256": "746ef651840612ed8b941f09319bc92cdf7d19727da37e4d857b86fd1fb9eef6" }, "dob": { "date": "1969-10-02T05:44:07Z", "age": 49 }, "registered": { "date": "2012-03-26T02:17:50Z", "age": 6 }, "phone": "021-895-7390", "cell": "081-186-9445", "id": { "name": "PPS", "value": "3115715T" }, "picture": { "large": "https://randomuser.me/api/portraits/women/65.jpg", "medium": "https://randomuser.me/api/portraits/med/women/65.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg" }, "nat": "IE" }];

  constructor(
    private http: Http
  ) {
    console.log('Constructor');
  }

  getAllUsers(): Observable<User[]>  {
    return this.http.get('https://randomuser.me/api/?results=10')
      .pipe(
        // Zet de responsestring om in json
        map(response => response.json()),
        // Haal de results-property uit de response
        map(response => response.results), 
        // Maak van het resultaat dat we nu hebben een array van User objecten.
        map(response => response.map(data => new User(data))),
        // Log dat resultaat voor debugging.
        tap(console.log),
        tap(users => this.users = users)
      );
      // Wat we hier nu hebben is een Observable. Die geeft pas resultaat als je er 'subscribe' op aanroept.
      // Dat doen we pas bij de aanroep in de service.
  }

  getUserById(id: number): User {
    const user = new User(this.users[id]);
    console.log(user);
    return user;
  }
}
