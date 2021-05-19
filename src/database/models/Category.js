module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define('Category', {
        id_category: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(200)
        },
        description: {
            type: dataTypes.STRING(200)
        },
    }, {
        tableName: 'categories',
        timestamps: false,
        paranoid: false
    });

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_category',
            timestamps: false,
        })
    }
    
    return Category;
}
