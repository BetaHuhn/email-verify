import anyTest, {TestInterface} from 'ava';
import request from 'supertest';
import app from '../src/server';

const test = anyTest as TestInterface<{ app: any }>;

/* Valid email */
test.serial('check valid email', async t => {
    const res = await request(app)
        .post('/api/v1/check')
        .send({
            email: 'no-reply@mxis.ch'
        });
    t.is(res.status, 200);
    t.is(res.body.result.valid, true);
});

test.serial('check invalid email - address doesnt exist', async t => {
    const res = await request(app)
        .post('/api/v1/check')
        .send({
            email: 'notavalidemail123@mxis.ch'
        });
    t.is(res.status, 200);
    t.is(res.body.result.valid, false);
});

test.serial('check invalid email - mx error', async t => {
    const res = await request(app)
        .post('/api/v1/check')
        .send({
            email: 'test@adsdsasda.ad'
        });
    t.is(res.status, 200);
    t.is(res.body.result.valid, false);
    t.is(res.body.result.message, 'no mx record found')
});

test.serial('check invalid email - wrong format', async t => {
    const res = await request(app)
        .post('/api/v1/check')
        .send({
            email: 'test@ad'
        });
    t.is(res.status, 200);
    t.is(res.body.result.valid, false);
    t.is(res.body.result.message, 'not a valid format')
});