import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Apartment } from '../models/Apartment';
import { Flat } from '../models/Flat';
import { Interest } from '../models/Interest';
import { Lease } from '../models/Lease';
import { Owner } from '../models/Owner';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  public getApartments(): Observable<Apartment[]> {
    return this.http.get(`${this.apiUrl}/apartments`).pipe(
      map((json: any) => {
        const objects: Apartment[] = [];
        for (const object of json) {
          objects.push(new Apartment(object));
        }
        return objects;
      })
    );
  }

  public searchApartments(search: string): Observable<Apartment[]> {
    return this.http.get(`${this.apiUrl}/apartments?search=${search}`).pipe(
      map((json: any) => {
        const objects: Apartment[] = [];
        for (const object of json) {
          objects.push(new Apartment(object));
        }
        return objects;
      })
    );
  }

  public addApartment(object: Apartment): Observable<Apartment> {
    return this.http.post<any>(`${this.apiUrl}/apartments`, object).pipe(map((json: any) => {
      return new Apartment(json);
    }));
  }

  public updateApartment(object: Apartment): Observable<Apartment> {
    return this.http.put<any>(`${this.apiUrl}/apartments/${object.id}`, object).pipe(map((json: any) => {
      return new Apartment(json);
    }));
  }

  public deleteApartment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/apartments/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }

  public getFlats(): Observable<Flat[]> {
    return this.http.get(`${this.apiUrl}/flats`).pipe(
      map((json: any) => {
        const objects: Flat[] = [];
        for (const object of json) {
          objects.push(new Flat(object));
        }
        return objects;
      })
    );
  }

  public searchFlats(search: string): Observable<Flat[]> {
    return this.http.get(`${this.apiUrl}/flats?search=${search}`).pipe(
      map((json: any) => {
        const objects: Flat[] = [];
        for (const object of json) {
          objects.push(new Flat(object));
        }
        return objects;
      })
    );
  }

  public addFlat(object: Flat): Observable<Flat> {
    return this.http.post<any>(`${this.apiUrl}/flats`, object).pipe(map((json: any) => {
      return new Flat(json);
    }));
  }

  public updateFlat(object: Flat): Observable<Flat> {
    return this.http.put<any>(`${this.apiUrl}/flats/${object.id}`, object).pipe(map((json: any) => {
      return new Flat(json);
    }));
  }

  public deleteFlat(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/flats/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }

  public getInterests(): Observable<Interest[]> {
    return this.http.get(`${this.apiUrl}/interests`).pipe(
      map((json: any) => {
        const objects: Interest[] = [];
        for (const object of json) {
          objects.push(new Interest(object));
        }
        return objects;
      })
    );
  }

  public addInterest(object: Interest): Observable<Interest> {
    return this.http.post<any>(`${this.apiUrl}/interests`, object).pipe(map((json: any) => {
      return new Interest(json);
    }));
  }

  public updateInterest(object: Interest): Observable<Interest> {
    return this.http.put<any>(`${this.apiUrl}/interests/${object.id}`, object).pipe(map((json: any) => {
      return new Interest(json);
    }));
  }

  public deleteInterest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/interests/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }

  public getLeases(): Observable<Lease[]> {
    return this.http.get(`${this.apiUrl}/lease`).pipe(
      map((json: any) => {
        const objects: Lease[] = [];
        for (const object of json) {
          objects.push(new Lease(object));
        }
        return objects;
      })
    );
  }

  public searchLeases(search: string): Observable<Lease[]> {
    return this.http.get(`${this.apiUrl}/lease?search=${search}`).pipe(
      map((json: any) => {
        const objects: Lease[] = [];
        for (const object of json) {
          objects.push(new Lease(object));
        }
        return objects;
      })
    );
  }

  public addLease(object: Lease): Observable<Lease> {
    return this.http.post<any>(`${this.apiUrl}/lease`, object).pipe(map((json: any) => {
      return new Lease(json);
    }));
  }

  public updateLease(object: Lease): Observable<Lease> {
    return this.http.put<any>(`${this.apiUrl}/lease/${object.id}`, object).pipe(map((json: any) => {
      return new Lease(json);
    }));
  }

  public deleteLease(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/lease/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }

  public getOwners(): Observable<Owner[]> {
    return this.http.get(`${this.apiUrl}/owners`).pipe(
      map((json: any) => {
        const objects: Owner[] = [];
        for (const object of json) {
          objects.push(new Owner(object));
        }
        return objects;
      })
    );
  }

  public searchOwners(search: string): Observable<Owner[]> {
    return this.http.get(`${this.apiUrl}/owners?search=${search}`).pipe(
      map((json: any) => {
        const objects: Owner[] = [];
        for (const object of json) {
          objects.push(new Owner(object));
        }
        return objects;
      })
    );
  }

  public addOwner(object: Owner): Observable<Owner> {
    return this.http.post<any>(`${this.apiUrl}/owners`, object).pipe(map((json: any) => {
      return new Owner(json);
    }));
  }

  public updateOwner(object: Owner): Observable<Owner> {
    return this.http.put<any>(`${this.apiUrl}/owners/${object.id}`, object).pipe(map((json: any) => {
      return new Owner(json);
    }));
  }

  public deleteOwner(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/owners/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }

  public getUsers(): Observable<User[]> {
    return this.http.get(`${this.apiUrl}/users`).pipe(
      map((json: any) => {
        const objects: User[] = [];
        for (const object of json) {
          objects.push(new User(object));
        }
        return objects;
      })
    );
  }

  public searchUsers(search: string): Observable<User[]> {
    return this.http.get(`${this.apiUrl}/users?search=${search}`).pipe(
      map((json: any) => {
        const objects: User[] = [];
        for (const object of json) {
          objects.push(new User(object));
        }
        return objects;
      })
    );
  }

  public addUser(object: User): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/users`, object).pipe(map((json: any) => {
      return new User(json);
    }));
  }

  public updateUser(object: User): Observable<User> {
    return this.http.put<any>(`${this.apiUrl}/users/${object.id}`, object).pipe(map((json: any) => {
      return new User(json);
    }));
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`).pipe(map((json: any) => {
      return json;
    }));
  }
}
