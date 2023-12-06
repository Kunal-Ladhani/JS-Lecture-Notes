import { Request, Response, NextFunction } from 'express';
import httpContext from 'express-http-context';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';

export function contextHandler(req: Request, res: Response, next: NextFunction) {
  httpContext.ns.bindEmitter(req);
  httpContext.ns.bindEmitter(res);
  _.each(req.headers, (value, key) => {
    httpContext.set(key, value);
  });
  let correlationId = req.get('x-correlation-id');
  if (!correlationId) {
    correlationId = `SA-UK-CUSTOMER-${uuid()}`;
  }
  httpContext.set('correlationId', correlationId);
  next();
}
