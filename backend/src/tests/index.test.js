import {describe, it, expect} from 'vitest';
import request from 'supertest';
import { app } from '../index';

describe('GET /' , ()=>{
       
    it('should return 200 and a message', async ()=>{
        const response = (await request(app).get('/'));
        expect(response.status).toBe(200);
        expect(response.body).toEqual({name: 'Kiran', age:22, occupation:'Software Engineer'});
    });
}) 

describe("POST / sum" , ()=>{
       
    it("Should return 200 and sum of the numbers" , async()=>{
           
        const res = ((await request(app).post("/sum").send({
            a:10,
            b:20
        })))

        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(30)
    })
})