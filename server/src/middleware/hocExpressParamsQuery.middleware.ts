import { Request, Response, NextFunction } from 'express';

// Your custom "middleware" function:
function hocExpressParamsQuery(validationSchema: any) {
  return function expressParamsQuery(req: Request, res: Response, next: NextFunction): void {
    console.log("express params query");
    try {
      let params = { ...req.query, ...req.params };
      validationSchema.parse(params);
      next();
    }
    catch (err) {
      res.status(404).send({ msg: "invalid entry data" });
    }
  }
}

export default hocExpressParamsQuery;