import { DataTypes, Sequelize } from 'sequelize';
import {
  DB_NAME,
  DB_HOST,
  DB_USER_NAME,
  DB_DIALECT,
  DB_PASSWORD,
} from "../config.js";
import poll from './poll.js';
import voter from './voter.js';
import organizer from './organizer.js';
import candidates from './candidates.js';

const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate()
  .then(() => {
    console.log("Successfully connected to database!");
  }).catch(err => {
    console.error(err)
  })

const db = {}

db.voter = voter(sequelize, DataTypes);
db.poll = poll(sequelize, DataTypes);
db.candidate = candidates(sequelize, DataTypes);
db.organizer = organizer(sequelize, DataTypes);


db.voter.belongsTo(db.poll, {
  foreignkey: {
    type: DataTypes.STRING
  }
})

db.candidate.belongsTo(db.poll, {
  foreignkey: {
    type: DataTypes.STRING
  }
})

db.poll.belongsTo(db.organizer);

db.poll.hasMany(db.candidate);

db.poll.hasMany(db.voter);

db.organizer.hasMany(db.poll, {
  foreignkey: {
    type: DataTypes.STRING
  }
})

// sequelize.sync({force:true}).then(()=>{
//   console.log("Db gets resync!!!");
// }).catch(err => {
//   console.error(err);
// })

export default db;