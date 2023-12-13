import { Request, Response, NextFunction } from 'express';

function hocExpressParamsQuery(validationSchema: any) {
  return function expressParamsQuery(req: Request, res: Response, next: NextFunction): void {
    try {
      const params = { ...req.query, ...req.params };
      validationSchema.strict().parse(params);
      next();
    }
    catch (err) {
      res.status(404).send({ msg: "invalid entry data" });
    }
  }
}

export default hocExpressParamsQuery;