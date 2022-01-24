import sequlize from './sequlize.js'

export default function dbInit() {
  sequlize
    .authenticate()
    .then(() => sequlize.sync({ force: true }))
    .catch((err) => {
      console.log(`连接失败${err}`)
    })
}
