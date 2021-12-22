import Router, { RouterContext } from 'koa-router';

const userRouter = new Router()

userRouter.get('/user', async (ctx: RouterContext) => {
    ctx.body = 'hi'
})
export default userRouter;