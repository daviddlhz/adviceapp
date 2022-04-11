import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAdviceRepository } from "@domain/advice/advice.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class AdviceService implements IAdviceRepository {

    constructor(private http: HttpClient) { }

    getAdvice(): Observable<HttpResponse<any>> {
        return this.http.get<HttpResponse<any>>(`${environment.baseUrl}/advice`, { observe: 'response' });
    }
 }