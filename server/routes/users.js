import Router from 'koa-router'

const users = Router()
users.prefix('/users')

users.get('/', async (ctx, next) => {
  ctx.body = 'akflj'
})

export default users
