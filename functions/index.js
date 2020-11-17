const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HQF43LDjXvV0TUz0MIQ8wEQFkY1FJ8INiBdyJtKgF7OdGIEz3SZlKUssBnwkPUggHcZ6iPrXIj7xubWgjj5lT0O00r2UTjjSp")

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log("Zahlung erhalten >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amoung: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);