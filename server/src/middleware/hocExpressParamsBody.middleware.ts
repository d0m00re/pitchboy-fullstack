import { Request, Response, NextFunction } from 'express';

function hocExpressBody(validationSchema: any) {
  return function expressParamsQuery(req: Request, res: Response, next: NextFunction): void {
    try {
      const body = req.body;
      validationSchema.parse(body);
      next();
    }
    catch (err) {
      res.status(404).send({ msg: "invalid entry data" });
    }
  }
}

export default hocExpressBody;