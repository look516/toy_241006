const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql/db'); // db.js 경로

const blog = sequelize.define('blog', {
  // 모델 속성 정의
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
  , userId: {
    type: DataTypes.INTEGER
    , allowNull: false
  }
  , title: {
    type: DataTypes.STRING(64),
    allowNull: false
  }
  , content: {
    type: DataTypes.STRING(512),
    allowNull: false
  }
  , createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
  , updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'blog',
  timestamps: true // createdAt과 updatedAt 자동 생성
});

module.exports = blog;
