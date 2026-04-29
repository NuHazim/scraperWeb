const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static("public"));

// API route (this is your REST API)
app.get("/api/books", async (req, res) => {
  try {
    const url = "https://books.toscrape.com/";

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let books = [];

    $(".product_pod h3 a").each((i, el) => {
      const title = $(el).attr("title");
      books.push(title);
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Scraping failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});