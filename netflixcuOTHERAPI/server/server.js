const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const backupres = require("./apiResponsebackup");
const newbackupres = require("./newApiResBackup");
app.use(cors());
const CircularJSON = require("circular-json");
const stripe = require("stripe")(
  "sk_test_51NdCoiSFgNssnXOVeOPbujpmoi8A7aiMQzzdzqA9AYux8dMG8AHLEDZ4ru0unUr6kDShvmKbCy3m3uu7t7UOSR2F00GpvRYY89"
);

app.get("/getClientSec", async (req, res) => {
  const cost = req.header("Cost") + "00";
  console.log(cost);
  const intent = await stripe.paymentIntents.create({
    amount: cost,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.json({ client_secret: intent.client_secret });
});

app.get("/fetchNetflix", async (req, res) => {
  const searchTerm = req.header("searchTerm");
  const options = {
    method: "GET",
    url: "https://unogsng.p.rapidapi.com/search",
    params: {
      start_year: "1972",
      orderby: "rating",
      audiosubtitle_andor: "and",
      limit: "100",
      subtitle: "english",
      countrylist: "78,46",
      audio: "english",
      country_andorunique: "unique",
      offset: "0",
      end_year: "2019",
    },
    headers: {
      "X-RapidAPI-Key": "75ac0be1e8msh07be2f82377f756p18cbb9jsn6de7d7f7f11a",
      "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
    },
  };

  if (searchTerm == "") {
    console.log("sending backup");
    const sendRes = newbackupres.results;
    res.send(sendRes);
  } else {
    console.log("searching");
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
});

app.get("/fetchshowdet", async (req, res) => {
  const id = req.header("id");
  const options = {
    method: "GET",
    url: "https://unogsng.p.rapidapi.com/title",
    params: {
      netflixid: id,
    },
    headers: {
      "X-RapidAPI-Key": "75ac0be1e8msh07be2f82377f756p18cbb9jsn6de7d7f7f11a",
      "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
    },
  };
  let sendRes;
  try {
    console.log("fetching showdet");
    const response = await axios.request(options);
    sendRes = response.data.results[0];
  } catch (error) {
    console.log("sending backupdet");
    sendRes = newbackupres.showdet;
    console.error(error);
  } finally {
    res.send(sendRes);
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
