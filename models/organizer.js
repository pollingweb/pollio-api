export default (sequelize, DataTypes) => {
  const Organizer = sequelize.define("Organiser", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false
    }
  });


  return Organizer;
}
