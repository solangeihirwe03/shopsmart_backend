import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const DB_HOST_MODE: string = process.env.DB_HOST_MODE || 'remote'


function getDbUri(): any{
    switch(NODE_ENV){
        case 'development':
            return process.env.DATABASE_URL_DEV
        case 'test' : 
            return process.env.DATABASE_URL_TEST
        default:
            return process.env.DATABASE_URL_PRO
    }
}

function getDialectOptions(){
    return DB_HOST_MODE === "local"
    ? {}
    : {
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    }
}

const sequelizeConnection: Sequelize = new Sequelize(getDbUri(),{
    dialect: "postgres",
    dialectOptions: getDialectOptions(),
    logging: false
});

sequelizeConnection.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


export default sequelizeConnection