
const db = require('../../database/models');


const controller = {
    index: (req, res) => {
            db.Product.findAll({
                include: "category",
            })
            .then(function(products){
                let donasGlaseadas = 0;
                let donasRellenas = 0;
                let donasGourmet = 0;
                let donasSaludables = 0;
                let donasAptosCeliacos = 0;
                let Bunuelos = 0;
                products.forEach(product => {
                
                if (product.id_category == 1){
                    donasGlaseadas = donasGlaseadas+1;
                }
                if (product.id_category == 2){
                    donasRellenas = donasRellenas+1;
                }
                if (product.id_category == 3){
                    donasGourmet = donasGourmet+1;
                }
                if (product.id_category == 4){
                    donasSaludables = donasSaludables+1;
                }
                if (product.id_category == 5){
                    donasAptosCeliacos = donasAptosCeliacos+1;
                }
                if (product.id_category == 6){
                    Bunuelos = Bunuelos+1;
                }
            });
                const response = {
                    meta: { 
                                count: { count: products.length,
                                    name: 'Total de Donas'},
                                donasGlaseadas: {count: donasGlaseadas,
                                         name: 'Donas Glaseadas'},
                                donasRellenas: {count: donasRellenas,
                                        name: 'Donas Rellenas'},
                                donasGourmet: {count: donasGourmet,
                                        name: 'Donas Gourmet'},
                                donasSaludables: {count: donasSaludables,
                                           name: 'Donas Saludables'},
                                donasAptosCeliacos: {count: donasAptosCeliacos,
                                            name: 'Donas Aptos Celíacos'},
                                Bunuelos: { count: Bunuelos,
                                    name: 'Buñuelos'},
                    },
                    results: products.map(product => {
                        let productObject = {
                          id: product.id_product,
                          name: product.name,
                          price: product.price,
                          discountValue:  product.discount_value,
                          category: product.category.name,
                          description: product.description,
                          image: `http://localhost:3000/img/${product.image}`,
                          detail: `http://localhost:3000/products/${product.id_product}`
                        }
                        return productObject
                      })
                }
                res.status(302).json (response);
            })

    },

    show: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(function(products){
            const response = {
                results: products
            }
            res.status(302).json (response);
        })
    },
};

module.exports = controller