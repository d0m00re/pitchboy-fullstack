import { Request, Response, NextFunction } from 'express';

function hocExpressBody(validationSchema: any) {
  return function expressParamsQuery(req: Request, res: Response, next: NextFunction): void {
    try {
      const body = req.body;
      validationSchema.strict().parse(body);
      next();
    }
    catch (err) {
      console.log(err)
      res.status(404).send({ msg: "invalid entry data" });
    }
  }
}

export default hocExpressBody;