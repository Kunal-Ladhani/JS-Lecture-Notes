import { NextFunction, Request, Response } from 'express';

import { logger } from '../utils';

export function accessLogger(req: Request, res: Response, next: NextFunction) {
  logger.info(
    `Received req : ${JSON.stringify({
      PATH: req.path,
      METHOD: req.method.toUpperCase(),
      PARAMS: req.params,
      QUERY: req.query,
      HEADERS: JSON.stringify(req.headers),
    })}`,
  );
  next();
}
