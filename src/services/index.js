const { productsMock } = require('../utils/mocks');
const MongoLib = require('../lib/mongo');


class ProductService {
  constructor(){
    this.collection = 'Reto9';
    this.mongoDB = new MongoLib();
  }
  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection, null);
    return products || [];
  }

  async createProduct( product ){
    const createdProductId = await this.mongoDB.create(this.collection, product);
    return createdProductId;
  }

  async updateProduct( productId, product){
    const updatedProductId = await this.mongoDB.update(this.collection, productId, product);
    return updatedProductId;
  }

  async deleteProduct( productId ){
    const deletedProductId = await this.mongoDB.delete(this.collection, productId);
    return deletedProductId;
}
}

module.exports = ProductService;
