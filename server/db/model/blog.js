import { DataTypes } from 'sequelize'
import sequlize from '../sequlize.js'
import UserModel from './user.js'

const BlogModel = sequlize.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

// blogModel 下的userId属于userModel的id
BlogModel.belongsTo(UserModel, {
  foreignKey: 'userId',
})
UserModel.hasMany(BlogModel, {
  foreignKey: 'userId',
})
export default BlogModel
