import request from "supertest";
import app  from './app';
import { Customer } from "./customer";

//look closely at the places I put async and await
test("/GET all customers returned", async () => {
    //you MUST await async functions
    const result = await request(app).get("/customers");

    //as means hey convert this into what comes after as
    const content = result.body as Customer[];

    expect(result.statusCode).toBe(200);
    expect(content.length).toBe(4);
});

test("/GET by id returns correct customer", async () => {
    const result = await request(app).get("/customers/1");

    const content = result.body as Customer;

    expect(result.statusCode).toBe(200);
    expect(content.id).toBe(1);
});

test('/GET by id on a customer that doesnt exists returns 404', async () => {
    const result = await request(app).get("/customers/1500");

    //This conversion is going to fail, but that's okay, if it fails I
    //just get an empty object
    const content = result.body as Customer;

    expect(result.statusCode).toBe(404);
    expect(content).toEqual({});
});
