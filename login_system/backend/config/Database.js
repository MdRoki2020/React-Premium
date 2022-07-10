import { Sequelize } from "sequelize";
 
const db = new Sequelize('react_login_system', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;