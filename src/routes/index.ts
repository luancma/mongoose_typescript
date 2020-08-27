import { Router, Request, Response } from 'express';

const routes = Router();

routes.get("/accountable", (request: Request, response: Response) => {
  response.json({
    email: "new email 123",
    name: "a name 21312312"

  })
})

export default routes;
