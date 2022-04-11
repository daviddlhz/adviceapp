import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IAdviceRepository {
  getAdvice(): Observable<HttpResponse<any>>;
}