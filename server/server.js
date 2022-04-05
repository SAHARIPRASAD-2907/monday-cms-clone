const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
const url = process.env.URL;
const token = process.env.TOKEN;

// create data in database
app.post("/tickets", async (req, res) => {
  console.log("Request getting called");
  const formData = req.body.formData;
  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };
  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// getting data from url
app.get("/tickets", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// getting individual data from url
app.get("/tickets/:documentId", async (req, res) => {
  const id = req.params.documentId;
  const options = {
    method: "GET",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// put request
app.put("/tickets/:documentId", async (req, res) => {
  console.log("Editing Document");
  const id = req.params.documentId;
  const data = req.body.data;
  console.log(id);
  const options = {
    method: "PUT",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
    data,
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

// delete task
app.delete("/tickets/:documentId", async (req, res) => {
  console.log("Request getting called");
  const id = req.params.documentId;
  const options = {
    method: "DELETE",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

app.listen(PORT, () => console.log("Server running on port" + PORT));
