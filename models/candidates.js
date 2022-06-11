import sequelize from "./base.js";
import { DataTypes } from "sequelize";

const Candidate = sequelize.define("Candidate", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voteCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  description : {
      type : DataTypes.STRING,
      allowNull : true
  }
  
});



export default Candidate;