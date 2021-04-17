const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HFnRvHiDfU83hDh927Qxomio9nDtk1dRmix27gk7GaFhbcyE3zBtaZ4XENNYeSKGk7MpXBgEHeOJAK9APmA92bi00E7w6JRWq');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request received >>>>>>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-cbb36/us-central1/api