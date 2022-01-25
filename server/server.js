import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import KoaLogger from 'koa-logger'
import KoaStatic from 'koa-static'
import path from 'path'
import users from './routes/users.js'
import dbInit from './db/index.js'

const app = new Koa()
onerror(app)
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())
app.use(KoaLogger())
app.use(KoaStatic(`${path.resolve()}/server/public`))

app.use(users.routes(), users.allowedMethods())
app.on('error', (err, ctx) => {
  console.error('server', err, ctx)
})
dbInit()

export default app
