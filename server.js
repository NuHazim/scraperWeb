const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static("public"));

app.get("/api/books", async (req, res) => {
  try {
    const range = req.query.range || "1-1";

    const parts = range.split("-");
    if (parts.length !== 2) {
      return res.status(400).json({ error: "Use format like 1-3" });
    }

    const start = parseInt(parts[0]);
    const end = parseInt(parts[1]);

    if (isNaN(start) || isNaN(end) || start < 1 || end < start) {
      return res.status(400).json({ error: "Invalid numbers" });
    }

    // limit pages (important)
    if (end - start > 10) {
      return res.status(400).json({ error: "Max 10 pages allowed" });
    }

    let result = {};

    for (let page = start; page <= end; page++) {
      console.log("Scraping page:", page);

      const url =
        page === 1
          ? "https://books.toscrape.com/"
          : `https://books.toscrape.com/catalogue/page-${page}.html`;

      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      let books = [];

      $(".product_pod h3 a").each((i, el) => {
        books.push($(el).attr("title"));
      });

      result[`Page ${page}`] = books;

      // small delay (good practice)
      await new Promise(r => setTimeout(r, 300));
    }

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Scraping failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});