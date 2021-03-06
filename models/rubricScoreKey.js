module.exports = function(sequelize, DataTypes) {
    var RubricScoreKey = sequelize.define('RubricScoreKey', {
        'id': {
            'type': DataTypes.INTEGER,
            'allowNull': false,
            'unique': true,
            'primaryKey': true,
            'autoIncrement': true
        },
        'rubricItemNum': {
            'type': DataTypes.INTEGER,
            'allowNull': false
        },
        'rating': {
            'type': DataTypes.INTEGER,
            'allowNull': false,
            'validate': {
                'allowEmpty': false
            }
        },
        'score': {
            'type': DataTypes.FLOAT,
            'allowNull': false
        }
    }, {
        'classMethods': {
            'associate': function(models) {
                RubricScoreKey.belongsTo(models.Exercise);
            }
        }
    });

    return RubricScoreKey;
};
