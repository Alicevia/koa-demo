import { Sequelize } from 'sequelize'

const sequlize = new Sequelize('test', 'root', '123456abc', {
  host: 'localhost',
  dialect: 'mysql',
})

export default sequlize
