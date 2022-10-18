const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
        },
        user_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nick_name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cards: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        login: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Inventory, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
  }
}

module.exports = User;
