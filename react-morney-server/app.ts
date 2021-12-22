import Koa from 'koa';

import userRouter from './app/api/user';
const app = new Koa()

app.use(userRouter.routes())
app.listen(8080)
