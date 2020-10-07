const supertest = require('supertest')
const app = require('./index')
const request = supertest(app)

// beforeAll(done => {
//     done()
//   })
  
//   afterAll(done => {
//     // Need to close the DB connection allows Jest to exit successfully.

//     done()
//   })

it('should return 200 status on the GET endpoint', async done => {
    const response = await request.get('/services')
    
    expect(response.status).toBe(200)

    done()
})

it('tests the POST endpoint', async done => {
    const response = await request
        .post('/services')
        .send({
            "name": "formotron"
        })
    
    expect(response.status).toBe(201)
    expect(response.body.message).toBe('Service added.')

    done()
})
