import { Request, Response, NextFunction } from 'express';

// Your custom "middleware" function:
function hocExpressBody(validationSchema: any) {
  console.log("wtf")
  return function expressParamsQuery(req: Request, res: Response, next: NextFunction): void {
    console.log("express params query");
    try {
      let body = req.body;
      validationSchema.parse(body);
      next();
    }
    catch (err) {
      res.status(404).send({ msg: "invalid entry data" });
    }
  }
}

export default hocExpressBody;