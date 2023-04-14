const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  sequelize: new Sequelize(DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
  connect: async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
  }
};
