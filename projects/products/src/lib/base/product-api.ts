import { Observable } from "rxjs";




export abstract class ProductAPI {
   abstract addExam(exam:any) : Observable<any>
}