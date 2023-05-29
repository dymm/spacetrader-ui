import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AgentDataService } from '../services/agent-data-service.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(
        private agentDataService: AgentDataService
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
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