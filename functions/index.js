const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51KJhaBGUBm9Jk2szRsiFEpTBlxo57C1yf0mUttZsscIvhg9f3ojaqa9U8xCBs4r2IFvhiaCemmaABvvV6hWXmu6G00CL7Ogp45') // put your secret key in the ('')

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())


// - API routes
app.get('/', (request, response) => response.status(200).send("hello world"))
// app.get('/jason', (request, response) => response.status(200).send("WHATS UP JASON"))


app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-8dc48/us-central1/api

