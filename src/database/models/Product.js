module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Product', {
        id_product: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(50),
        },
        price: {
            type: dataTypes.DECIMAL,
        },
        image: {
            type: dataTypes.STRING(100),
        },
        discount_value: {
            type: dataTypes.STRING(10),
        },
        discount: {
            type: dataTypes.INTEGER(11)
        },
        description: {
            type: dataTypes.STRING(2000)
        },
        icon_image: {
            type: dataTypes.STRING(100)
        }
    }, {
        tableName: 'products',
        paranoid: false,
        timestamps: false
    });
    Product.associate = models => {
        Product.belongsToMany(models.User, {
            as: 'users',
            through: 'products_users',
            foreignKey: 'id_product',
            otherKey: 'id_user',
            timestamps: false,
        })
    }

    return Product;
}
