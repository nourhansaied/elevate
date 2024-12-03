import { Observable } from "rxjs";



export abstract class AuthAPI {

  abstract login(userData:any): Observable<any>
}
