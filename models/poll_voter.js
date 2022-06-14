export default (sequelize, DataTypes) => {
    const Poll_voter = sequelize.define("poll_voter", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pollId: DataTypes.STRING,
        voterId: DataTypes.STRING
    }, { timestamps: false });

    return Poll_voter;
}