module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id_user: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        first_name: {
            type: dataTypes.STRING(50)
        },
        last_name: {
            type: dataTypes.STRING(50)
        },
        username: {
            type: dataTypes.STRING(50)
        },
        birthday: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING(50)
        },
        password: {
            type: dataTypes.STRING(100),
        },
        avatar: {
            type: dataTypes.STRING(50)
        },
        myselection: {
            type: dataTypes.STRING(100)
        },
        id_rol: {
            type: dataTypes.INTEGER(11)
        },
    }, {
        tableName: 'users',
        timestamps: false,
        paranoid: false
    });

    User.associate = models => {
        User.belongsToMany(models.Product, {
            as: 'products',
            through: 'products_users',
            foreignKey: 'id_user',
            otherKey: 'id_product',
            timestamps: false,
        })
    }
    
    return User;
}
