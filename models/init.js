import Poll from './poll.js';
import Voter from './voter.js';
import Organizer from './organizer.js';
import Candidate from './candidates.js';

import { DataTypes } from 'sequelize';

import sequelize from './base.js';

export default function initTables(drop = false) {

    /**
     * Many-to-one
     */
    Voter.belongsTo(Poll, {
        foreignkey: {
            type: DataTypes.STRING
        }
    });

    /**
     * Many-to-one
     */
    Candidate.belongsTo(Poll, {
        foreignKey: {
            type: DataTypes.STRING
        }
    });

    /**
     * One-to-one
     */
    Poll.hasOne(Organizer);

    /**
     * One-to-many
     */
    Poll.hasMany(Candidate);

    /**
     * One-to-many
     */
    Poll.hasMany(Voter);

    /**
     * One-to-many
     */
    Organizer.hasMany(Poll, {
        foreignKey: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    /** Tables related operations can be perform here */
    if (drop)
        sequelize.drop();
    else
        sequelize.sync({ alter: true });

}