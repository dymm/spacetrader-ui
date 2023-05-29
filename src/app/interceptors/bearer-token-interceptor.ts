import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AgentDataService } from '@base/services/agent-data-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationBearerHeaderInterceptor implements HttpInterceptor {
    constructor(
        private agentDataService: AgentDataService
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.agentDataService.agentToken;
        if(token?.length && req.url.includes('api.spacetraders.io')) {
            console.log(req.url);
            const modifiedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
            });
            return next.handle(modifiedReq);
        } else {
            return next.handle(req);
        }
    }
}