const assert = require('assert');
const proxyquire = require('proxyquire');

const { productsMock } = require('../utils/mocks');
const testserver = require('../schemas/testServer');

describe('routes -  products', function() {
    const route = proxyquire('../routes/index',{
        '../services/index': ProductService
    });

    const request = testserver(route);
    describe('GET / products', function(){
        it('should respond with status 200', function (done) {
            request.get('/api/products').expect(200, done)
        });

        it('should respond with the list of products', function(done) {
            request.get('/api/products').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: productsMock,
                    message: 'products listed'
                });
                done();
            });
        });
    });
});