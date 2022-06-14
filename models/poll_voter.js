export default (sequelize, DataTypes) => {
    const Poll_voter = sequelize.define("poll_voter", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pollId: DataTypes.STRING,
        voterId: DataTypes.STRING,
        isVoted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamps: false });

    return Poll_voter;
}